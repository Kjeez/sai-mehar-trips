require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

app.post('/api/request-callback', async (req, res) => {
  const data = req.body;
  const name = data.name || data.firstName || 'User';

  let textContent = 'New Form Submission Details:\n\n';
  for (const [key, value] of Object.entries(data)) {
    textContent += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_USER, 'yourtrickster.kg@gmail.com'], // Send to primary email and testing email
      subject: `New Form Submission from ${name}`,
      text: textContent,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send request.', error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
