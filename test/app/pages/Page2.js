
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Page2() {

  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
    console.log(name)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // (name.length===0)? alert("name is empty"): alert(`name is ${name}`)
    if (name.length === 0) {
      alert("name is empty")
    } else {
      alert(`name is ${name}`)
    }


  }


  return (
    <>
    <Head>
      <title>
        Next App
      </title>
    </Head>
      Name : {name}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link href='/'>
            <button>Back</button>
        </Link>
      <img src='./img/sss.jpg' alt='image' width={300}/>
    </>
  )

}