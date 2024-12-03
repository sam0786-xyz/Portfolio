const router = require('express').Router();
const { llamaService } = require('../services/llamaService');

router.post('/generate', async (req, res) => {
  try {
    const { prompt, options } = req.body;
    const response = await llamaService.generateContent(prompt, options);
    res.json({ content: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 