import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GlowCard({info, doNothing, type, actions}) {

    const navigate = useNavigate();
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    //TODO - this is such as nice card - use it later, fix this.

    //TODO: this is too bad - fixed (open modal!)

    const enlarge = info.enlarge ? 'enlargeIcon' : '';
    const isVideo = info.video ? 'glowVideo' : 'glowIcon';

    useEffect(() => {
        if (!info.video) return;
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
        if (isVisible && info.title === '1-on-1') {
            actions.mouseEnter();
        } else if (!isVisible && info.title === '1-on-1') {
            actions.mouseLeave();
        }

    },[isVisible]) 

    const openLink = () => {
        if (doNothing) return;
        navigate(info.link)
    }

    if (info.toHide) {
        return (
            <div className="box" id='hideThisBox'></div>
        )
    }

    //TODO: style was added into help long
    return (
        <div
            ref={cardRef} 
            className={`box ${info.video ? 'smText' : ''}`} 
            style={type === 'long' ? {scale: '.8',marginTop: '0px'} : null} 
            onMouseEnter={info.video ? actions.mouseEnter : null} 
            onMouseLeave={info.video ? actions.mouseLeave : null}>
            <span></span>
            <div onClick={openLink} className="content">
                <h2>{info.title}</h2>
                <p>{info.text}</p>
                {/* <a href="#">Read More</a> */}
                <img className={`${enlarge} ${isVideo}`} src={info.image} alt="" />
            </div>
        </div>
    )
}

export default GlowCard

//super special thanks

//https://codepen.io/kodplay/pen/oNBreRJ