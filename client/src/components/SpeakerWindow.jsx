import React, {useState,useEffect} from 'react';
import AppRoutes from './AppRoutes';

function SpeakerWindow() {

    function SetGlass() {

        const [placement,setPlacement] = useState({});
    
        const setSpeakerPane = () => {

            // TODO: why does this keep re-rendering console.log('re-running')
            
            const rect = document.getElementById('copyGlass').getBoundingClientRect();

            setPlacement({
                position: `fixed`,
                top: `${rect.top}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
            })
        }

        useEffect(() => {
            setSpeakerPane();
            window.addEventListener('resize', setSpeakerPane);

            return () => {
                window.removeEventListener('resize', setSpeakerPane);
            }
        }, []);
    
        return (
            <div className='glass putBehind' style={placement}></div>
        )
    }

    return (
    <>        
        <div className='speakerWindow' id='copyGlass'>
            <AppRoutes/>
        </div>
        <SetGlass />
    </>
    )
}

export default SpeakerWindow


