import React, { useContext } from 'react';
import { AppContext } from '../storeManagement/AppContext';

function StateInfo() {

    const {app, setApp} = useContext(AppContext);

    const showCharacters = app.load.characters.map(c => {
        let style = app.monster.name === c ? {color: 'red'} : null;
        return (
            <span style={style} onClick={() => setApp({type: 'selectMonster', payload: c})} key={c}> 🔘{c}</span>
        )
    })

    const showMoves = app.load.moves.map(m => {
        let style = app.monster.move === m ? {color: 'red'} : null;
        return (
            <span style={style} onClick={() => setApp({type: 'selectMove', payload: m})} key={m}> 🔘{m}</span>
        )
    })

    return (
        <div className='stateInfo'>
            <h2>App Info | Mode: {app.status.mode}</h2>
            Characters: {showCharacters}
            <br/>
            Moves: {showMoves}
        </div>
    )
}

export default StateInfo