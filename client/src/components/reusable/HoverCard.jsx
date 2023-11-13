import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../storeManagement/AppContext';

function HoverCard({info, setSelected, index, hover}) {
    let def = `Start typing, ask me a question`;

    const {app, setApp} = useContext(AppContext);
    const {type} = app.dimensions;
    const long = type === 'long' ? 'long' : '';

    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const {name = def,link,image,tech,description } = info;

    useEffect(() => {
        if (type !== 'mobile') return;
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
        if (type !== 'mobile') return;

        if (isVisible) {
            setApp({type: 'setInstructions', payload: description})
        }

        const clear = setTimeout(() => {
            setIsHovered(hover ? true : false);
        },300)

        return () => clearTimeout(clear);


    },[isVisible,hover]) 


    const showInstructions = () => {
        setApp({type: 'setInstructions', payload: description})
    }

    const handleTouch = () => {
        setSelected(index);
        console.log('touching', name)
        setIsHovered(true);
    }

    const RenderCard = () => (
        <div className={`gradHover ${long} ${isHovered ? 'hover' : ''}`} onMouseEnter={showInstructions} onTouchStart={handleTouch}>
            <div className="gradHoverImg">
                <img src={image} alt={name} className='hoverImg' />
            </div>
            <h2 className="gradHoverText">{name}</h2>
        </div>
    );
    
    return (
    <>
        {name ? 
            <a ref={cardRef} href={link} target='_blank'>
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
