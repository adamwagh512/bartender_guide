import Head from 'next/head'
import Landing from '../pages/landing'


export default function Home() {
  return (
    <>
      <Head>
        <title>The Home Bartender's Guide</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
         <Landing /> 
        </div>
      
      </main>
    </>
  )
}
