import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>

      <div>
        <h1 className='page-title'>Welcome <br></br>To Our Agency</h1>
        <p style={{marginLeft:'-30px' ,fontSize:'22px'}}> With high quality services  We are here to <br></br>provide you  with everything you need. 
        </p>
       
        <div className={styles.container}>
        </div>
         <Link href='/Contact'>
          <button className='btn-contact'>Get Started</button>
        </Link>

      </div>
    </>
  )
}
