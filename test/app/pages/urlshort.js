import React, { useState } from 'react'
import styles from '../styles/Urlshort.module.css'
import axios from 'axios'

const page5 = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  

  const handleSubmit = async () => {
    if (url.length === 0) {
      return alert("Please enter url")
    }
   await axios.post("http://localhost:3001/url/shorten",
      { longUrl: url }
      ).then(function(d){
        setShorturl(d.data.data.shortUrl)

        sessionStorage.setItem("url", (d.data.data.shortUrl))
         
      })
      .catch(function (err) {
        if(err){
          const erro = err.response.data.message
          setUrl("")
          alert(erro)
          
        }
        //console.log((error.response.data.message))
  })
    // console.log(res.error)
    //setShorturl(res.data.data.shortUrl)
    // console.log(res.data.status)
  }

  const shortAnother = () => {
    setUrl("")
    setShorturl("")
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Free URL Shortner</div>
        <div className={styles.text}>It is a free tool to shorten URLs. Create short and memorable links in seconds.</div>

        <div>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Enter link here' className={styles.textarea} />
          <input type="button" onClick={handleSubmit} className={styles.button} value="Short URL" />
        </div>
        <div className={styles.text}>
          By clicking Shorten URL, you agree to  <u>Terms of Use</u>, <u>Privacy Policy</u> and <u>Cookie Policy</u>
        </div>
        {shorturl ? <div className={styles.shorted}>
          <div className={styles.shorHeading}>Shorted URL</div>
          <input type="text" value={shorturl} className={styles.output} />
          <button onClick={(e) => { navigator.clipboard.writeText(shorturl);alert("Copied to clipboard");}} className={styles.btn}>Copy</button><br />
          <button onClick={shortAnother} className={styles.btn_another}>Short Another URL</button>
        </div> : ""}

      </div>
      <div className={styles.about}>
        <div className={styles.about_heading}>A fast and simple URL shortener</div>
        <div className={styles.about_text}><b>Free URL Shortener</b> for transforming long, ugly links into nice, memorable and trackable short URLs. Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos. It is <b>the best free alternative to generic URL shorteners like bitly and tinyurl</b>. After shorterning the URL, <a className={styles.about_text_a}>check how many clicks it received</a></div>
      </div>
    </>
  )
}

export default page5