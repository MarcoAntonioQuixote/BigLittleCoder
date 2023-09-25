import React, { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../storeManagement/AppContext';
import { getMonsterInfo } from '../utilities/monstFunctions';

function useOpenAI() {

    const {app,setApp} = useContext(AppContext);

    async function executeChat(prompt) {

        const url = 'http://localhost:8000/promptChat';

        const chatReq = { 
            ...getMonsterInfo(app.children[1].name), prompt
        }

        let response = await axios.post(url, chatReq);
        let payload = response.data.choices[0].text;
        setApp({type: 'setInstructions', payload})
        console.log(payload);
    }

    return executeChat;

}

export default useOpenAI