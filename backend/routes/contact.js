const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Add your email sending logic here
    // For now, just log the message
    console.log('Contact form submission:', { name, email, message });
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 