import { useReducer } from 'react'
import './App.css'
import ChildComp from './components/ChildComp';
import {AppContext, appObject} from './storeManagement/AppContext'
import appReducer from './storeManagement/appReducer';

function App() {
    const [app,dispatch] = useReducer(appReducer,appObject);

    return (
        <AppContext.Provider value={{app,dispatch}}>
            Here is content
            <ChildComp/>
        </AppContext.Provider>
    )
}

export default App
