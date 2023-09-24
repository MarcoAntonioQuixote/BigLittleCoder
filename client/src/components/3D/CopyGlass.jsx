import React, { useState, useEffect } from 'react'

function CopyGlass() {

    const [placement,setPlacement] = useState({})

    useEffect(() => {
        let window = document.getElementById('copyGlass');
        const rect = window.getBoundingClientRect();

        setPlacement({
            position: `fixed`,
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
        })

    }, []);

    return (
        <div className='glass' style={placement}></div>
    )
}

export default CopyGlass