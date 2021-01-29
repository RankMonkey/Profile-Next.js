import Head from 'next/head';

import ContactComponent from '../components/Contact';

export default function Contact(){
    return(
        <div className='page-container'>
            <Head>
                <title>Contact Rohit</title>
               
            </Head>
            <main>
                <ContactComponent />
            </main>
        </div>
    );
}