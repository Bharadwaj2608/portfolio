const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bharadwajpisupati5@gmail.com',
    pass: 'zuxvmxkzdwzajcbm',
  }
});

transporter.sendMail({
  from: 'bharadwajpisupati5@gmail.com',
  to: 'bharadwajpisupati5@gmail.com',
  subject: 'Test Email from Portfolio',
  text: 'If you see this, email is working!'
}, (err, info) => {
  if (err) {
    console.log('ERROR:', err.message);
  } else {
    console.log('SUCCESS:', info.response);
  }
});