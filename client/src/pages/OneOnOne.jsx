import React, { useContext } from 'react'
import {CharacterContext} from '../storeManagement/CharacterContext';

function OneOnOne() {

    const {characters} = useContext(CharacterContext);
    console.log('inside 1', characters);

    return (
        <div>OneOnOne</div>
    )
}

export default OneOnOne