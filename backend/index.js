const express = require('express');
const cors = require('cors');
const stripe = require('stripe');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper to send donation email
const sendDonationEmail = async (session) => {
  const amount = (session.amount_total / 100).toFixed(2);
  const currency = session.currency.toUpperCase();
  const customerEmail = session.customer_details.email;
  const customerName = session.customer_details.name;

  const mailOptions = {
    from: `"Community Witnesses Alerts" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL, // The organization's email to receive alerts
    subject: `\u2b50 New Donation Received: \u00a3${amount}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #D4AF37;">New Impact Contribution Recorded!</h2>
        <p>A new donation has been processed through the website.</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p><strong>Donor Name:</strong> ${customerName}</p>
        <p><strong>Donor Email:</strong> ${customerEmail}</p>
        <p><strong>Amount:</strong> ${amount} ${currency}</p>
        <p><strong>Transaction ID:</strong> ${session.id}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #999;">This is an automated alert from your Stripe integration.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`\u2709\ufe0f Confirmation email sent to admin for donation: ${session.id}`);
  } catch (error) {
    console.error('Error sending donation email:', error);
  }
};

const app = express();
const port = process.env.PORT || 8000;

// Middleware
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.use(cors());

// Webhook route - MUST be before any JSON middleware to get the raw body
app.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log(`\u2705 Payment Success for Session: ${session.id}`);
      // Send alert email to admin
      await sendDonationEmail(session);
      break;
    
    case 'invoice.payment_succeeded':
      // Handle recurring donation payments
      const invoice = event.data.object;
      console.log(`\u2705 Subscription Payment Success: ${invoice.id}`);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

// JSON Middleware for regular API routes
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Community Witnesses Donation API is running.');
});

// Donation Route
app.post('/api/donations/create-checkout-session/', async (req, res) => {
  try {
    const { amount, donation_type } = req.body;
    
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Convert to cents
    const unitAmount = Math.round(parseFloat(amount) * 100);

    // Create Stripe Checkout Session
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Donation to Community Witnesses (${donation_type || 'one-time'})`,
              description: 'Thank you for your generous support of our mission to restore hope.',
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/donate?success=true`,
      cancel_url: `${process.env.FRONTEND_URL}/donate?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
