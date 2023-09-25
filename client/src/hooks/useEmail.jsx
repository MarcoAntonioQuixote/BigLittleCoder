import emailjs from '@emailjs/browser';
import axios from 'axios';
import { getMonsterInfo } from '../utilities/monstFunctions';

async function useEmail(form,app) {

    const id = import.meta.env.VITE_EMAILJS_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE;
    const key = import.meta.env.VITE_EMAILJS_KEY;

    //send the prompt as well as the animal
    const chatReq = {
        ...getMonsterInfo(app.children[1].name),
        prompt: form.message
    }

    let response = await axios.post('http://localhost:8000/promptChat',chatReq);
    console.log(response.data.choices[0].text);

    // emailjs.send(id,template,form,key)
    //     .then(
    //         res => console.log(res.text), 
    //         err => console.log(err.text)
    //     )
}

export default useEmail