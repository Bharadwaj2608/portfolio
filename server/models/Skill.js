const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'design', 'other'],
    required: true
  },
  proficiency: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  icon: String,
  color: String,
  yearsOfExperience: {
    type: Number,
    default: 1
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
