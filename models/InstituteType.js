const mongoose = require('mongoose');

const InstituteTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('InstituteType', InstituteTypeSchema);
