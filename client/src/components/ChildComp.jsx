import React, { useContext, useEffect } from 'react';
import { AppContext } from '../storeManagement/AppContext';
import {CharacterContext} from '../storeManagement/CharacterContext';

function ChildComp() {

    const {app} = useContext(AppContext);
    const value = useContext(CharacterContext);

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div>ChildComp powersOn {app.powersOn ? 'on' : 'off'} </div>
    )
}

export default ChildComp