import emailjs from '@emailjs/browser';

function useEmail(form) {
    const id = import.meta.env.VITE_EMAILJS_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE;
    const key = import.meta.env.VITE_EMAILJS_KEY;

    emailjs.send(id,template,form,key)
        .then(
            res => console.log(res.text), 
            err => console.log(err.text)
        )
}

export default useEmail