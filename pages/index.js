import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignIn from '../components/SignIn'



export default function Home() {
  const [teste,setTeste] = useState(false);
  const router = useRouter();
  useEffect( ()=>{
    // setTimeout(()=>{
      // setTeste(1+1);
      router.push('/login');;
    // },3000)
    
  },[])
  
  if(!teste){
    // router.push('/login');
    return(
      <>
        
        <h1>Loading....</h1>
        {/* {Redireciona()} */}
      </>)
  }
  return (
    <>
      <Head>
      
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
      </Head>
      <SignIn />
    
    </>
  )
}
