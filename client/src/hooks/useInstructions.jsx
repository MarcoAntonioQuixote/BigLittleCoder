import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../storeManagement/AppContext";
import dynamicText from "../portfolioData/randomMonsterInfo";

const useInstructions = (next,specialValue) => {
    const {app,setApp} = useContext(AppContext);
    let location = useLocation();
    
    useEffect(() => {
        let path = location.pathname.slice(1);
        let paths = app.assigned.map(a => a.page);
        let isPagePath = paths.includes(path);
        if (!isPagePath) {
            console.log('triggered here with path:', path)
            setApp({type: 'setPage',payload: path});
            setApp({type: 'setInstructions', payload: dynamicText(path)})
            return;
        }
        let payload;
        if (!app.status.started) {
            setApp({type: 'setInstructions', payload: dynamicText('selection')});
            return
        }
        if (app.status.started) {
            setApp({type: 'goToPage', payload: path})
        }
        if (isPagePath) {
            path = path === '' ? 'Home' : path;
            payload = dynamicText(path);
            setApp({type: 'setInstructions', payload})
        } 

    },[location]);
    //make it dynamic by using specialValue
    // return instructions[next];
}

export default useInstructions;