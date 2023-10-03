import React, {useState,useEffect, useContext} from 'react';
import AppRoutes from './AppRoutes';
import { AppContext } from '../storeManagement/AppContext';

function SpeakerWindow() {

    const {app} = useContext(AppContext);
    const page = app.status.currentPage;

    function SetGlass() {

        const [placement,setPlacement] = useState({});
        let onDarken = '';
        let pagesToDarken = ['TechStack','Coaching','cohorts','1-on-1']
        if (pagesToDarken.includes(page)) {
            onDarken = 'darken'
        }

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
            <div className={`glass putBehind ${onDarken}`} style={placement}></div>
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


