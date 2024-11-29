const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instituteTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'InstituteType' },
});

module.exports = mongoose.model('Board', BoardSchema);
