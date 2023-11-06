const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    }, 
    imageurls : [],
    currentbookings : [],
    type: {
      type: String,
      required: true
    }

    // roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);


const RoomModel = mongoose.model('Hotel', RoomSchema);

module.exports = RoomModel;

