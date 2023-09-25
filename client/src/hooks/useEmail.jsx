import emailjs from '@emailjs/browser';
import axios from 'axios';

async function useEmail(form) {
    const id = import.meta.env.VITE_EMAILJS_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE;
    const key = import.meta.env.VITE_EMAILJS_KEY;

    console.log(form.message);

    let response = await axios.post('http://localhost:8000/home',form);
    console.log(response.data);

    // emailjs.send(id,template,form,key)
    //     .then(
    //         res => console.log(res.text), 
    //         err => console.log(err.text)
    //     )
}

export default useEmail