import React from 'react'

function CaptionCard({card}) {

    return (
        <figure class="snip0016">
            <img className='captionTile' src={card.image} alt={card.text}/>
            <figcaption>
                {card.text}
            </figcaption>     
        </figure>
    )
}

export default CaptionCard
