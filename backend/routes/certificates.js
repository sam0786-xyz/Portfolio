const router = require('express').Router();
const Certificate = require('../models/Certificate');

// Get all certificates
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add certificate
router.post('/', async (req, res) => {
  const certificate = new Certificate(req.body);
  try {
    const newCertificate = await certificate.save();
    res.status(201).json(newCertificate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 