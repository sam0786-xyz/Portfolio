const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { projects, certificates } = require('../data/sampleData');
const Project = require('../models/Project');
const Certificate = require('../models/Certificate');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Project.deleteMany({});
    await Certificate.deleteMany({});

    // Insert sample data
    await Project.insertMany(projects);
    await Certificate.insertMany(certificates);

    console.log('Database seeded successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
  }); 