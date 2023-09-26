import React from 'react';
import { useNavigate } from 'react-router-dom';

function GlowCard({info, setOpen, openModal, doNothing}) {

    const navigate = useNavigate();

    //TODO - this is such as nice card - use it later, fix this.


    //TODO: this is too bad - fixed (open modal!)

    const enlarge = info.enlarge ? 'glowIcon' : '';
    const video = info.video ? 'glowVideo' : '';

    if (info.toHide) {
        return (
            <div className="box" id='hideThisBox'></div>
        )
    }

    const openInformationModal = () => {
        if (doNothing) return;
        if (!openModal) {
            navigate('/contact');
            return
        };
        setOpen(true);
    }

    return (
        <div className="box">
            <span></span>
            <div onClick={openInformationModal} className="content">
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