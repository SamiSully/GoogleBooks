const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Please enter a valid title",
  },
  authors: {
    type: Array,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
