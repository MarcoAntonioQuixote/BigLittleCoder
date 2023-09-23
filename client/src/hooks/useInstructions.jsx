import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../storeManagement/AppContext";

const instructions = {
    selection: `Which Big Little Coder are You?`,
    speaker: `Cool! Let's check out this journey together!`,
    Home: `Big Little Coder helps you dream big with little baby steps along the way. 👟`,
    Cohorts: 'Want to learn in a group setting? Radical!',
    '1-on-1': 'What about 1-on-1s!',
    Projects: `Check out personal projects we're working on!`,
    MarkAnthony: `He's a cool guy - he helped bring me and my friends to life! 🔥`
}

const useInstructions = (next,specialValue) => {
    const {app,setApp} = useContext(AppContext);
    let location = useLocation();
    
    useEffect(() => {
        let path = location.pathname.slice(1);
        let paths = app.assigned.map(a => a.page);
        let isValidPath = paths.includes(path);
        let payload;
        if (app.status.started) {
            setApp({type: 'goToPage', payload: path})
        }
        if (isValidPath) {
            path = path === '' ? 'Home' : path;
            payload = instructions[path];
        } else {
            payload = instructions[next];
        }
        setApp({type: 'setInstructions', payload})

    },[location]);
    //make it dynamic by using specialValue
    return instructions[next];
}

export default useInstructions;