import { useReducer } from 'react'
import './styles/App.css';
import ChildComp from './components/ChildComp';
import {AppContext, appObject} from './storeManagement/AppContext'
import appReducer from './storeManagement/appReducer';
import { CharacterProvider as CharacterContext } from './storeManagement/CharacterContext';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';

function App() {
    const [app,dispatch] = useReducer(appReducer,appObject);

    return (

        <AppContext.Provider value={{app,dispatch}}>   
        <CharacterContext>
            Here is content
            <ChildComp/>
            <Navbar/>

            <div className="tablet">
                <AppRoutes/>
            </div>
        </CharacterContext>
        </AppContext.Provider>
    )
}

export default App
