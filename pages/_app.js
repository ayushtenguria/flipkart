import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import '../styles/navbar.css'
import '../styles/productSpace.css'
import '../styles/signup.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
       <Head>
       </Head>
       <Layout> 
         <Component {...pageProps} /> 
       </Layout>    
    
    </>
 

  )
}

export default MyApp
