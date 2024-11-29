const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import all models
const Board = require('./models/Board');
const ClassCategory = require('./models/ClassCategory');
const Degree = require('./models/Degree');
const Exam = require('./models/Exam');
const Institute = require('./models/Institute');
const InstituteType = require('./models/InstituteType');
const Standard = require('./models/Standard');
const Subject = require('./models/Subject');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected.');

    // Clear existing data
    await Board.deleteMany({});
    await ClassCategory.deleteMany({});
    await Degree.deleteMany({});
    await Exam.deleteMany({});
    await Institute.deleteMany({});
    await InstituteType.deleteMany({});
    await Standard.deleteMany({});
    await Subject.deleteMany({});
    console.log('Existing data cleared.');

    // Add Institute Types
    const instituteTypes = [
      { name: 'Playhouse' },
      { name: 'School' },
      { name: 'College' },
      { name: 'Competitive Exam Center' },
    ];
    const savedInstituteTypes = await InstituteType.insertMany(instituteTypes);
    console.log('Institute types added.');

    // Add Boards
    const boards = [
      { name: 'CBSE' },
      { name: 'GSAB' },
    ];
    const savedBoards = await Board.insertMany(boards);
    console.log('Boards added.');

    // Add Class Categories
    const classCategories = [
      { name: 'Pre-primary' },
      { name: 'Primary' },
      { name: 'Secondary' },
      { name: 'Higher Secondary' },
    ];
    const savedClassCategories = await ClassCategory.insertMany(classCategories);
    console.log('Class categories added.');

    // Add Standards
    const standards = [
      { name: 'LKG', classCategoryId: savedClassCategories[0]._id },
      { name: 'HKG', classCategoryId: savedClassCategories[0]._id },
      { name: '8th', classCategoryId: savedClassCategories[2]._id },
      { name: '9th', classCategoryId: savedClassCategories[2]._id },
      { name: '10th', classCategoryId: savedClassCategories[2]._id },
    ];
    const savedStandards = await Standard.insertMany(standards);
    console.log('Standards added.');

    // Add Subjects
    const subjects = [
      { name: 'Math', standardId: savedStandards[3]._id },
      { name: 'Science', standardId: savedStandards[3]._id },
      { name: 'English', standardId: savedStandards[4]._id },
    ];
    const savedSubjects = await Subject.insertMany(subjects);
    console.log('Subjects added.');

    // Add Degrees
    const degrees = [
      { name: 'Bachelor of Science', type: 'Bachelor' },
      { name: 'Master of Arts', type: 'Master' },
    ];
    const savedDegrees = await Degree.insertMany(degrees);
    console.log('Degrees added.');

    // Add Institutes
    const institutes = [
      { name: 'ABC institutes', type: 'Competitive Exam Center', location: 'Delhi, India' },
      { name: 'XYZ institutes', type: 'Playhouse', location: 'Mumbai, India' },
    ];
    const savedInstitutes = await Institute.insertMany(institutes);
    console.log('Institutes added.');

    // Add Exams
    const exams = [
      { name: 'JEE Main', category: 'Engineering', instituteId: savedInstitutes[0]._id },
      { name: 'UPSC', category: 'Civil Services', instituteId: savedInstitutes[0]._id },
    ];
    const savedExams = await Exam.insertMany(exams);
    console.log('Exams added.');

    console.log('Data seeding complete.');
    process.exit();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });
