import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignIn from '../components/SignIn'



export default function Home() {
  const router = useRouter();
  useEffect( ()=>{
    // setTimeout(()=>{
      router.push('/login');
    // },3000)
    
  },[])
  return (
    <>
      <Head>
      
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
      </Head>
      <SignIn />
    
    </>
  )
}
