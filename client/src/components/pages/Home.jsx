import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../storeManagement/AppContext';
import { returnText } from '../../portfolioData/randomMonsterInfo';
import { Button } from '@mui/material';

function Home() {

    const {setApp} = useContext(AppContext);
    const [prompt,setPrompt] = useState('');

    useEffect(() => {
        let charNum = prompt.length;
        if (charNum === 1) {
            setApp({type: 'setInstructions', payload: returnText('start')})
        } else if (charNum === 100) {
            setApp({type: 'setInstructions', payload: returnText('halfway')})
        } else if (charNum === 193) {
            setApp({type: 'setInstructions', payload: returnText('end')})
        }
    }, [prompt]);

    const handlePrompt = (e) => {
        setPrompt(e.target.value);
    }

    const chatReq = () => {
        console.log(prompt);
    }

    return (
        <div className='pageInSpeakerWindow centerOnPage'>
            <textarea type="text" 
                placeholder='Ask me anything...'
                className='chatWithMonster'
                rows={6}
                autoFocus
                maxLength={200}
                onChange={handlePrompt}
            />

            <Button onClick={chatReq} className='fixSize button' variant='text'>Chat</Button>

        </div>
    )
}

export default Home;