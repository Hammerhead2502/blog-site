import axios from "axios"
import { useState } from "react"

export default function Compose() {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const handleClick= async (event) => {
        event.preventDefault()
        try{
            await axios.post("/api/composePost", {title, message}).then((res) => console.log(res))
        }
        catch(err){
            console.log(err)
        }
    }
    return (<div><h1 className="heading">Compose page</h1>
    <form method="POST"><div className="formTitle">
        <label htmlFor="title">Enter blog title : </label>
        <input type="text" placeholder="Enter title" name="title" value={title} onChange={(event) => setTitle(event.target.value) } id="title"></input><br></br></div>
        <label htmlFor="message">Enter message : </label>
        <textarea placeholder="Enter message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} id="message" rows="14" cols="50"></textarea><br></br>
        <button onClick={handleClick}>Submit blog</button>
    </form>
    </div>)
  }
  