import Post from "./postSchema.js"

export default function handler(req, res) {
    const title = req.body.title
    const message = req.body.message
    const post = new Post({
      title: title,
      message: message
    })
    post.save((err) => {
      if(err){
        console.log(err)
      }
      else{
        res.send("Post saved")
      }
    })
}