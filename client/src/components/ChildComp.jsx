import React, { useContext } from 'react';
import { AppContext } from '../storeManagement/AppContext';

function ChildComp() {

    const {app} = useContext(AppContext);

    return (
        <div>ChildComp powersOn {app.powersOn ? 'on' : 'off'} </div>
    )
}

export default ChildComp