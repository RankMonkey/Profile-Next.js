import {useEffect} from 'react';

import initGA from '../utils/analytics';

const HomeComponent = (props) => {
    useEffect(() => {
        initGA();
    })
    return(
        <div className='home-page'>
                <h1>Welcome to my Profile</h1>
            <h1 className='title'>Hi, I am <span>Rohit.</span></h1>
            <p className='content'>
                An Aspiring Full Stack Developer, who lets his imagination run so wild that... he has to code it out.
            </p>
        </div>
    )
}

export default HomeComponent;