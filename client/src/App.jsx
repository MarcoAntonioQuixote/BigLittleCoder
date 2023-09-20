import { useReducer } from 'react'
import './styles/App.css';
import ChildComp from './components/CharacterSelect';
import {AppContext, appObject} from './storeManagement/AppContext'
import appReducer from './storeManagement/appReducer';
import { CharacterProvider as CharacterContext } from './storeManagement/CharacterContext';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import TheScene from './components/3D/TheScene';
import Monster from './components/3D/Monster';
import StateInfo from './components/StateInfo';

function App() {
    const [app,dispatch] = useReducer(appReducer,appObject);

    return (
        <AppContext.Provider value={{app,dispatch}}>   
        <CharacterContext>
            <Navbar/>
            <TheScene>
                <Monster/>
            </TheScene>
            {/* <div className="App" >
                <div className="tablet">
                    <AppRoutes/>
                </div>
            </div> */}
            <StateInfo />
        </CharacterContext>
        </AppContext.Provider>
    )
}

export default App
