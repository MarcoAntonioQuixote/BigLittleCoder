import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../storeManagement/AppContext';
import { Button } from '@mui/material';
import useOpenAI from '../../hooks/useOpenAI';
import dynamicText from '../../portfolioData/randomMonsterInfo';

function Home() {

    const {setApp} = useContext(AppContext);
    const [prompt,setPrompt] = useState('');
    const [hasResponded, setHasResponded] = useState(false);
    const executeChat = useOpenAI();
    const buttonRef = useRef()

    useEffect(() => {
        let charNum = prompt.length;
        if (charNum === 0 && hasResponded) {
            setApp({type: 'setInstructions', payload: dynamicText('loading')})
        } else if (charNum === 1) {
            setApp({type: 'setInstructions', payload: dynamicText('chatStart')})
        } else if (charNum === 100) {
            setApp({type: 'setInstructions', payload: dynamicText('chatHalfway')})
        } else if (charNum === 193) {
            setApp({type: 'setInstructions', payload: dynamicText('chatEnd')})
        }
    }, [prompt]);

    const handlePrompt = (e) => {
        setPrompt(e.target.value);
    }

    const chatReq = () => {
        executeChat(prompt);
        setHasResponded(true);
        setPrompt('');
        buttonRef.current.blur();
        // TODO: error handeling in case the server is down
    }

    const reset = () => {
        setHasResponded(false);
        setApp({type: 'setInstructions', payload: dynamicText('chatReset')})
    }

    return (
        <div className='pageInSpeakerWindow centerOnPage'>
            <textarea type="text" 
                placeholder={hasResponded ? '' : 'Ask me anything...'}
                rows={6}
                autoFocus
                maxLength={200}
                onChange={handlePrompt}
                value={prompt}
                id='chatWithMonster'
            />

            <Button ref={buttonRef} onClick={hasResponded ? reset : chatReq} className='fixSize button' variant='text'>
                {hasResponded ? 'Chat Again' : 'Chat'}
            </Button>

        </div>
    )
}

export default Home;