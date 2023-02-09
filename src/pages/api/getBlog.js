import Post from "./postSchema.js"

export default function handler(req,res){
    const title = req.query.title
    Post.findOne({title: title}, (err, blog) => {
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send(blog)
        }
    })
}