import { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../storeManagement/AppContext';
import { getMonsterInfo } from '../utilities/monstFunctions';

function useOpenAI() {

    const {app,setApp} = useContext(AppContext);

    async function executeChat(prompt) {

        const url = import.meta.env.VITE_BACKEND;

        const chatReq = { 
            ...getMonsterInfo(app.children[1].name), prompt
        }

        let response = await axios.post(`${url}/promptChat`, chatReq);
        let payload = response.data.choices[0].text;
        setApp({type: 'setInstructions', payload})

    }

    return executeChat;

}

export default useOpenAI