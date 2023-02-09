import Post from "./postSchema.js"

export default function handler(req,res){
    Post.find({}, (err, postArray) => {
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send(postArray)
        }
    })
}