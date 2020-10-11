const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    randomNo: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model('Blog', dataSchema);

module.exports = Data;