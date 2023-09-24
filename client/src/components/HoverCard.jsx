import React from 'react';
import { Link } from 'react-router-dom';

function HoverCard({info}) {

    const {name = 'Explore',link,image,tech } = info;

    const RenderCard = () => (
        <div className="gradHover">
            <div className="gradHoverImg">
                <img src={image} alt={name} className='hoverImg' />
            </div>
            <h2 className="gradHoverText">{name}</h2>
        </div>
    );
    
    return (
    <>
        {name ? 
            <Link to='JoinCohort'>
                <RenderCard />
            </Link> : 
            <a href={link} target='_blank'>
                <RenderCard />
            </a>
        }
    </>
    )
}


export default HoverCard;
