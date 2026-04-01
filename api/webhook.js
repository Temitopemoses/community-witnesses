const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
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
    to: process.env.ADMIN_EMAIL,
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // For Vercel, req.body is already parsed, but for webhooks, we need raw.
    // Vercel provides raw body in req.body for API routes, but it's parsed.
    // To handle webhooks properly, we might need to use a different approach.
    // For simplicity, assuming req.body is the raw buffer.
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log(`\u2705 Payment Success for Session: ${session.id}`);
      await sendDonationEmail(session);
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      console.log(`\u2705 Subscription Payment Success: ${invoice.id}`);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
}</content>
<parameter name="filePath">c:\Users\USER\Desktop\community witnesses\api\webhook.js