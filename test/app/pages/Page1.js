import { useState } from "react"
import axios from "axios"

export default function Form() {

    const [first,setFirst] = useState("")
    const [last,setLast] = useState("")
    const [name,setName] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await axios.post("http://localhost:3000/api/form", {first,last})
        setName(res.data.data)
        console.log(res.data)
    }
    return (<>
    <div><h1>{name}</h1></div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" onChange={(e)=>setFirst(e.target.value)}  required />
  
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" onChange={(e)=>setLast(e.target.value)} required />
  
        <button type="submit">Submit Now</button>
        
      </form>
      
</>
    )
  }