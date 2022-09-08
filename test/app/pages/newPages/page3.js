import Link from "next/link"
import { useState } from "react"

import {data} from '../apidata/data.js'


const page3 = () => {
  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [min_size,setMin_size] = useState("")
  const [country,setCountry] = useState("")

  const handleChange = (e) =>{
    setCountry(e.target.value)
  }

  const callapi = async () =>{
   
    const jsonData = await data

    const name = await data.find(str => str.name.includes(country))
    setId(name.id)
    setName(name.name)
    setMin_size(name.min_size)
    
 
  }
  return (
    <>
      <div>page3</div>
      <label>Country name</label>
      <input type="text" value={country} onChange={handleChange}/><br></br>
      <button onClick={callapi}>Check Detail</button>
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Min-Size</th>
        </tr>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{min_size}</td>
        </tr>
        </tbody>
      </table>

      <Link href='/'>
        <button>Back</button>
      </Link>
    </>
  )
}

export default page3