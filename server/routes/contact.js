const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

async function sendEmailNotification(contact) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Message: ' + contact.subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px;">
        
        <div style="background: linear-gradient(135deg, #FF4500, #FF6B00); padding: 24px; border-radius: 6px; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Portfolio Message</h1>
        </div>

        <div style="background: #f9f9f9; padding: 24px; border-radius: 6px; border-left: 4px solid #FF4500; margin-bottom: 16px;">
          <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${contact.name}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
          <p style="margin: 0;"><strong>Subject:</strong> ${contact.subject}</p>
        </div>

        <div style="background: #f9f9f9; padding: 24px; border-radius: 6px; margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0;"><strong>Message:</strong></p>
          <p style="margin: 0; line-height: 1.7; color: #333;">${contact.message}</p>
        </div>

        <div style="text-align: center;">
          <a href="mailto:${contact.email}?subject=Re: ${contact.subject}"
             style="display: inline-block; background: linear-gradient(135deg, #FF4500, #FF6B00); color: white; padding: 12px 32px; border-radius: 4px; text-decoration: none; font-weight: bold;">
            Reply to ${contact.name}
          </a>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">
          Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
        </p>
      </div>
    `
  });
}

const validateContact = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('subject').trim().isLength({ min: 5, max: 200 }).withMessage('Subject must be 5-200 characters'),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters')
];

router.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, subject, message } = req.body;

    const contact = new Contact({
      name, email, subject, message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });
    await contact.save();

    sendEmailNotification({ name, email, subject, message })
      .then(() => console.log('Email sent to ' + process.env.EMAIL_TO))
      .catch(err => console.error('Email failed:', err.message));

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      id: contact._id
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;