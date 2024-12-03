const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: String,
  category: { type: String, required: true },
  technologies: [String],
  image: String,
  githubLink: String,
  liveDemo: String,
  featured: Boolean,
  type: { type: String, enum: ['major', 'mini'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema); 