const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String
  },
  thumbnail: {
    type: String,
    required: true
  },
  images: [String],
  techStack: [{
    type: String
  }],
  category: {
    type: String,
    enum: ['web', 'mobile', 'backend', 'fullstack', 'design', 'other'],
    default: 'web'
  },
  githubUrl: {
    type: String
  },
  liveUrl: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  stats: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'archived'],
    default: 'completed'
  }
}, {
  timestamps: true
});

projectSchema.index({ featured: -1, order: 1 });
projectSchema.index({ category: 1 });

module.exports = mongoose.model('Project', projectSchema);
