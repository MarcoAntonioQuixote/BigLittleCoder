import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../storeManagement/AppContext';

function usePlacement() {

    const {app} = useContext(AppContext);
    const {type} = app.dimensions;
    const {tracking} = app.secondCanvas;
    
    //tracking = the what that we want to place;
    let trackingID = app.secondCanvas[tracking];
    const [placement, setPlacement] = useState({});

    useEffect(() => {        
        positionNode();
        window.addEventListener('resize', positionNode);

        return () => {
            window.removeEventListener('resize', positionNode);
        }
    }, []);

    function positionNode() {
        if (!trackingID) return;
        
        const rect = document.getElementById(trackingID).getBoundingClientRect();

        //specifically made for balls, what about others?
        switch(tracking) {
            case 'balls':
                if (type === 'long') {
                    setPlacement({
                        position: `fixed`,
                        top: `${rect.top - 75}px`,
                        left: `${rect.left}px`,
                    })
                } else {
                    const top = type === 'mobile' ?
                        `${rect.top}px` :
                        `${rect.top - 150}px`
                    const left = type === 'mobile' ?
                        `${rect.left + 50}px` :
                        `${window.innerWidth/2}px`
                    setPlacement({
                        top,
                        left,
                        position: 'fixed',
                        transform: `translate(-50%)`,
                    })
                }
                
                break;
            case 'cohort':
                setPlacement({
                    position: `fixed`,
                    top: `${rect.top + 150}px`,
                    left: `${rect.left + 150}px`,
                })
                break;
        }

    }
    return placement;
}

export default usePlacement