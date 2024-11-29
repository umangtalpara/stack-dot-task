const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['Playhouse', 'School', 'College', 'Competitive Exam Center'], 
    required: true 
  },
  location: { type: String, required: true }, 
});

module.exports = mongoose.model('Institute', InstituteSchema);

