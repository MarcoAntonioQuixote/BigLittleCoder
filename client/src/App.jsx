import { useEffect, useReducer } from 'react'

import {AppContext, appObject} from './storeManagement/AppContext'
import appReducer from './storeManagement/appReducer';
import { CharacterProvider as CharacterContext } from './storeManagement/CharacterContext';
import Navbar from './components/Navbar';
import StateInfo from './components/StateInfo';
import The3DCanvas from './components/3D/The3DCanvas';

function App() {
    const [app,setApp] = useReducer(appReducer,appObject);

    //learned I didn't have to put routes here

    return (
        <AppContext.Provider value={{app,setApp}}>   
        <CharacterContext>
            <Navbar/>
            <The3DCanvas />
            {/* <StateInfo /> */}
        </CharacterContext>
        </AppContext.Provider>
    )
}

export default App
