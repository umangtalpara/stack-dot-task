const mongoose = require('mongoose');

const DegreeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Bachelor', 'Master', 'Diploma'], required: true }, 
});

module.exports = mongoose.model('Degree', DegreeSchema);
