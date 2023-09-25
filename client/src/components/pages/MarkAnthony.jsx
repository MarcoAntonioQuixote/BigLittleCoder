import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../storeManagement/AppContext';
import { Link } from 'react-router-dom';
import {portfolioTiles, data} from '../../portfolioData/markAnthonyBalls';
import CaptionCard from '../CaptionCard';
import Marquee from 'react-fast-marquee';

function MarkAnthony() {

    const {setApp} = useContext(AppContext);

    useEffect(() => {
        setApp({type: 'showBalls', payload: true});
        return () => {
            setApp({type: 'showBalls', payload: false});
        }
    },[]);

    const showTiles = portfolioTiles.map((tile,i) => {
        return (
            <CaptionCard key={i} card={tile} className='thisTile'/>
        )
    })

    return (
        <div className='pageInSpeakerWindow centerOnPage'>
            {/* Mark Anthony | A Portfolio */}

            <Marquee 
                pauseOnHover={true}
                speed={150}
                // gradient={true}
                // gradientColor='white'
                gradientWidth={15}
                className='marquee'
            >
                {showTiles}
                {/* <figure class="snip0016">
  <img className='captionTile' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample41.jpg" alt="sample41"/>
  <figcaption>
    <h2>I think <span>nighttime</span> is dark</h2>
    <p>So you can imagine your fears with less distraction.</p>
    <a href="#"></a>
  </figcaption>     
</figure>
<figure class="snip0016">
  <img className='captionTile' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample42.jpg" alt="sample42"/>
  <figcaption>
    <h2>I suppose if we couldn't <span>laugh</span></h2>
    <p>At things that don't make sense, we couldn't react to a lot of life.</p>
    <a href="#"></a>
  </figcaption>     
</figure>
<figure class="snip0016">
  <img className='captionTile' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample43.jpg" alt="sample43"/>
  <figcaption>
    <h2>I think the <span>surest</span> sign </h2>
    <p>That intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
    <a href="#"></a>
  </figcaption>     
</figure> */}
            </Marquee>
            
            {/* <div ref={carouselRef} className="carousel-container">
                <div className={`carousel ${isHovering ? 'paused' : ''}`} 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {showTiles}
                </div>
            </div> */}
        </div>
    )
}

export default MarkAnthony