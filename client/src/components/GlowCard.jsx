import React from 'react'

function GlowCard({info}) {

    //TODO - this is such as nice card - use it later, fix this.

    const enlarge = info.enlarge ? 'glowIcon' : '';
    const video = info.video ? 'glowVideo' : '';

    console.log(video);

    if (info.toHide) {
        return (
            <div className="box" id='hideThisBox'></div>
        )
    }

    return (
        <div className="box">
            <span></span>
            <div className="content">
                <h2>{info.title}</h2>
                <p>{info.text}</p>
                {/* <a href="#">Read More</a> */}
                <img className={`${enlarge} ${video}`} style={{width: '50px'}} src={info.image} alt="" />
            </div>
        </div>
    )
}

export default GlowCard

//super special thanks

//https://codepen.io/kodplay/pen/oNBreRJ