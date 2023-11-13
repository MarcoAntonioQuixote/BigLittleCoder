import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../storeManagement/AppContext'

function CaptionCard({card}) {

    const cardRef = useRef(null);
    const {app} = useContext(AppContext);
    const {type} = app.dimensions;
    const [isVisible, setIsVisible] = useState(false);

    const style = type !== 'mobile' ? {} : {
            width: '70vw',
        }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            setIsVisible(entry.isIntersecting);
            },
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );
    
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
    
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
        }, []);

    useEffect(() => {
        if (isVisible) {
            cardRef.current.focus();
            console.log('focusing');
        } else {
            cardRef.current.blur();
        }

    },[isVisible]) 

    return (
        <figure tabIndex={-1} ref={cardRef} className="snip0016">
            <img className='captionTile' style={style} src={card.image} alt={card.text}/>
            <figcaption>
                {card.text}
            </figcaption>     
        </figure>
    )
}

export default CaptionCard
