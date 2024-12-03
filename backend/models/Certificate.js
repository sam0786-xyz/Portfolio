const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  skills: [String],
  image: String,
  link: String,
  icon: String
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema); 