import React from 'react'

function GlowCard({info}) {
    return (
        <div className="box">
            <span></span>
            <div className="content">
                <h2>{info.title}</h2>
                <p>{info.text}</p>
                {/* <a href="#">Read More</a> */}
                <img className={info.enlarge ? 'glowIcon' : null} style={{width: '50px'}} src={info.image} alt="" />
            </div>
        </div>
    )
}

export default GlowCard

//super special thanks

//https://codepen.io/kodplay/pen/oNBreRJ