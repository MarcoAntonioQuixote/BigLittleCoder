import emailjs from '@emailjs/browser';

async function useEmail(form,app) {

    const id = import.meta.env.VITE_EMAILJS_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE;
    const key = import.meta.env.VITE_EMAILJS_KEY;

    try {
        let res = await emailjs.send(id,template,form,key);
        return res;
    } catch (error) {
        return null;
    }
        // .then(
        //     res => console.log(res.text), 
        //     err => console.log(err.text)
        // )
}

export default useEmail