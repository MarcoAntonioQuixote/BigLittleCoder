import React from 'react';
import { Link } from 'react-router-dom';

function HoverCard({info}) {
    let def = `Start typing, ask me a question`;

    const {name = def,link,image,tech } = info;

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
            <a href={link} target='_blank'>
                <RenderCard />
            </a>  :
            <Link to='JoinCohort'>
                <RenderCard />
            </Link> 
        }
    </>
    )
}


export default HoverCard;
