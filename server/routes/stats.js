const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Contact = require('../models/Contact');
const Skill = require('../models/Skill');

// GET portfolio stats
router.get('/', async (req, res) => {
  try {
    const [
      totalProjects,
      totalContacts,
      totalSkills,
      totalViews,
      featuredProjects
    ] = await Promise.all([
      Project.countDocuments(),
      Contact.countDocuments(),
      Skill.countDocuments(),
      Project.aggregate([
        { $group: { _id: null, total: { $sum: '$stats.views' } } }
      ]),
      Project.countDocuments({ featured: true })
    ]);

    res.json({
      projects: totalProjects,
      contacts: totalContacts,
      skills: totalSkills,
      views: totalViews[0]?.total || 0,
      featured: featuredProjects,
      yearsExperience: new Date().getFullYear() - 2020
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
