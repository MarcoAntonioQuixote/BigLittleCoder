import React, { useContext } from 'react'
import { AppContext } from '../storeManagement/AppContext'
import { CharacterContext } from '../storeManagement/CharacterContext';

function StateInfo() {

    const {app, setApp} = useContext(AppContext);

    const showCharacters = app.load.characters.map(c => <span onClick={() => setApp({type: 'selectMonster', payload: c})} key={c}> 🔘{c}</span>)

    const showMoves = app.load.moves.map(m => <span onClick={() => setApp({type: 'selectMove', payload: m})} key={m}> 🔘{m}</span>)

    return (
        <div>
            <h4 style={{color: 'red'}}>App Info:</h4>
            Characters: {showCharacters}
            <br/>
            Moves: {showMoves}
            <br/>
            Current: {app.monster.name} : {app.monster.move}
        </div>
    )
}

export default StateInfo