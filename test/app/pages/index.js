import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'




export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello </h1>
      <ul>
        <li>
          <Link href="/Page1">
            <a>Page1</a>
          </Link>
        </li>
      
        <li>
          <Link href="/Page2">
            <a>Page2</a>
          </Link>
        </li>
        <li>
          <Link href="/newPages/page3">
            <a>Page3</a>
          </Link>
        </li>
      </ul>
      <button onClick={() => Router.push('/Page2')}>page2</button>
    </div>
  )
}
