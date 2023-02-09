const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/blogDB")

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: String,
  message: String
})

module.exports= mongoose.models.post || mongoose.model("post", postSchema)
