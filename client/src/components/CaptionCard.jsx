import React from 'react'
import { Link } from 'react-router-dom'

function CaptionCard({card}) {

    return (

        <Link to='/contact'>
            <figure className="snip0016">
                <img className='captionTile' src={card.image} alt={card.text}/>
                <figcaption>
                    {card.text}
                </figcaption>     
            </figure>
        </Link>

    )
}

export default CaptionCard
