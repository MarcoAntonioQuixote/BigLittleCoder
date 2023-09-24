import React from 'react';
import HoverCard from '../HoverCard';

function Home() {

    // let num = randomNum(1,3);
    // let path = `../../public/gifs/coder${num}.gif`;

    let paths = [];
    for (let x = 1; x <= 4; x++) {
        paths.push(`/gifs/coder${x}.gif`);
    }

    return (
        <div className='pageInSpeakerWindow centerOnPage'>
            <HoverCard info={{image: paths[0]}} />
        </div>
    )
}

export default Home;
