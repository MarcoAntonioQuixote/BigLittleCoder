import React from 'react';

function Home() {

    // let num = randomNum(1,3);
    // let path = `../../public/gifs/coder${num}.gif`;

    let paths = [];
    for (let x = 1; x <= 4; x++) {
        paths.push(`../../public/gifs/coder${x}.gif`);
    }

    return (
        <div className='page'>
            <div className="gradHover">
                <div className="gradHoverImg">
                    <img src={paths[0]} alt="Some description" className='hoverImg' />
                </div>
                <h2 className="gradHoverText">Check</h2>
            </div>
        </div>
    )
}

export default Home;
