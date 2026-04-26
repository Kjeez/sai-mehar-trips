import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const data = req.body || {};
  const name = data.name || data.firstName || 'User';

  let textContent = 'New Form Submission Details:\n\n';
  for (const [key, value] of Object.entries(data)) {
    textContent += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_USER, 'yourtrickster.kg@gmail.com'],
      subject: `New Form Submission from ${name}`,
      text: textContent,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send request.', error: error.toString() });
  }
}
