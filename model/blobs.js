var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
   name: String,
   badge: Number,
   dob: { type: Date, default: Date.Now },
   isloved: Boolean  
});
mongoose.model('Blob', blobSchema);