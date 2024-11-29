const express = require('express');
const router = express.Router();

const InstituteType = require('../models/InstituteType');
const Board = require('../models/Board');
const ClassCategory = require('../models/ClassCategory');
const Standard = require('../models/Standard');
const Subject = require('../models/Subject');
const Institute = require('../models/Institute');
const Exam = require('../models/Exam');


// const Institute = require('./models/Institute');
// const Exam = require('./models/Exam');

router.get('/institute-types', async (req, res) => {
  try {
    const types = await InstituteType.find();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/institute', async (req, res) => {
  try {
    const Institutes = await Institute.find();
    res.json(Institutes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/exam', async (req, res) => {
  const { instituteId } = req.query;
  try {
    const Exams = await Exam.find({instituteId}).populate('instituteId');
    res.json(Exams);
  } catch (err) {
    res.status(500).json({ error: err.message });  
  }
});

router.get('/boards', async (req, res) => {
  const { instituteTypeId } = req.query;
  try {
    const boards = await Board.find({ instituteTypeId }).populate('instituteTypeId');
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/class-categories', async (req, res) => {
  const { instituteTypeId } = req.query;
  try {
    const categories = await ClassCategory.find({ instituteTypeId }).populate('instituteTypeId');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/standards', async (req, res) => {
  const { classCategoryId } = req.query;
  try {
    const standards = await Standard.find({ classCategoryId }).populate('classCategoryId');
    res.json(standards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/subjects', async (req, res) => {
  const { standardId } = req.query;
  try {
    const subjects = await Subject.find({ standardId }).populate('standardId');
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/degrees', async (req, res) => {
  try {
    const degrees = await Degree.find();
    res.json(degrees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const data = req.body;
    res.json({ success: true, message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
