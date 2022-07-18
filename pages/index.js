import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignIn from '../components/SignIn'



export default function Home() {
  return (
    <>
      <Head>
      
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
      </Head>
      <SignIn />
    
    </>
  )
}
