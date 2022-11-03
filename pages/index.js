import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>

      <div>
        <h1 className='page-title'>Welcome <br></br><br></br>To Our Agency</h1>
       
        <div className={styles.container}>
        </div>
         <Link href='/Contact'>
          <button className='btn-contact'>Get Started</button>
        </Link>

      </div>
    </>
  )
}
