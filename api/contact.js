import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, subject, message, fullName, phone, interest, availability } = req.body;

    // Determine if it's contact or get involved
    const isVolunteer = fullName && interest;

    const fromName = isVolunteer ? fullName : name;
    const fromEmail = email;
    const emailSubject = isVolunteer ? `Volunteer Interest: ${interest}` : subject;
    const emailBody = isVolunteer ?
      `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Availability:</strong> ${availability || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
      ` :
      `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

    const mailOptions = {
      from: `"Community Witnesses Contact" <${process.env.EMAIL_USER}>`,
      to: 'contact@communitywitnesses.org.uk',
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>New ${isVolunteer ? 'Volunteer Interest' : 'Contact'} Submission</h2>
          ${emailBody}
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999;">This is an automated message from the Community Witnesses website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ error: error.message });
  }
}</content>
<parameter name="filePath">c:\Users\USER\Desktop\community witnesses\api\contact.js