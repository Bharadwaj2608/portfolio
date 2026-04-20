const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    
    const skills = await Skill.find(filter).sort({ category: 1, order: 1 });
    
    // Group by category
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    res.json({ skills, grouped });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create skill
router.post('/', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST bulk create skills (for seeding)
router.post('/bulk', async (req, res) => {
  try {
    const skills = await Skill.insertMany(req.body.skills);
    res.status(201).json({ created: skills.length, skills });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
