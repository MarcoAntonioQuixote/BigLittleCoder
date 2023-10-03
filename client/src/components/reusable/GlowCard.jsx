import React from 'react';
import { useNavigate } from 'react-router-dom';

function GlowCard({info, doNothing}) {

    const navigate = useNavigate();

    //TODO - this is such as nice card - use it later, fix this.


    //TODO: this is too bad - fixed (open modal!)

    const enlarge = info.enlarge ? 'enlargeIcon' : '';
    const isVideo = info.video ? 'glowVideo' : 'glowIcon';

    if (info.toHide) {
        return (
            <div className="box" id='hideThisBox'></div>
        )
    }

    const openLink = () => {
        if (doNothing) return;
        navigate(info.link)
    }

    return (
        <div className={`box ${info.video ? 'smText' : ''}`}>
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