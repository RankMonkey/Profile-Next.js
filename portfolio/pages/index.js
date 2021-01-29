import Head from 'next/head'

import HomeComponent from '../components/Home';

export default function Home() {  
  return (
    <>
      <Head>
        <title>Rohit Ranchhod</title>
        <meta
          name="description"
          content="Rohit Ranchhod Portfolio"
        />
       
      </Head>
      <div className='page-container home-page'>
        <main>
          <HomeComponent />
        </main>
      </div>
    </>
  )
}
