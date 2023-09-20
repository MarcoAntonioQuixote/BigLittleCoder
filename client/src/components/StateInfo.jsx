import React, { useContext } from 'react'
import { AppContext } from '../storeManagement/AppContext'
import { CharacterContext } from '../storeManagement/CharacterContext';

function StateInfo() {

    const {app} = useContext(AppContext);
    const {characters} = useContext(CharacterContext);

    let charArr = Object.entries(characters);
    const showLoads = charArr.map(keyVal => <div key={keyVal[0]}>{keyVal[0]}: {keyVal[1].rig.type}</div>)

    return (
        <div>
            <h4 style={{color: 'red'}}>App Info:</h4>
            Characters: {app.load.characters.map(c => <span key={c}>{c} </span>)}
            <br/>
            Moves: {app.load.moves.map(m => <span key={m}>{m} </span>)}
            <br/>
            Current: {app.monster.name}
            <h4 style={{color: 'green'}}>Characters Info:</h4>
            Loaded Characters: {showLoads}
        </div>
    )
}

export default StateInfo