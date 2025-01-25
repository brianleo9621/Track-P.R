const express = require('express');
const router = express.Router();
const PR = require('../models/PR');

// Get all personal records
router.get('/', async (req, res) => {
  try {
    const prs = await PR.find().sort({ date: -1 });
    res.json(prs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new personal record
router.post('/', async (req, res) => {
  const pr = new PR({
    exercise: req.body.exercise,
    weight: req.body.weight,
    reps: req.body.reps
  });

  try {
    const newPR = await pr.save();
    res.status(201).json(newPR);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const pr = await PR.findById(req.params.id);
        
        if (!pr) {
            return res.status(404).json({ message: 'Personal record not found' });
        }

        await PR.findByIdAndDelete(req.params.id);
        res.json({ message: 'Personal record deleted successfully' });
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const pr = await PR.findById(req.params.id);
        
        if (!pr) {
            return res.status(404).json({ message: 'Personal record not found' });
        }

        const updatedPR = await PR.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(updatedPR);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;