import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../storeManagement/AppContext';

function usePlacement() {

    const {app} = useContext(AppContext);
    const {tracking} = app.secondCanvas;
    
    //tracking = the what that we want to place;
    const trackingID = app.secondCanvas[tracking];
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
                setPlacement({
                    position: `fixed`,
                    top: `${rect.top - 50}px`,
                    left: `${rect.left - 150}px`,
                })
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