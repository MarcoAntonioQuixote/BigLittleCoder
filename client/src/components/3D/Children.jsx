import React, { useContext } from 'react'
import { AppContext } from '../../storeManagement/AppContext'
import childrenMap from './allSceneChildren';

function Children() {

    const {app} = useContext(AppContext);
    const children = app.scene.children;

    const showChildren = children.map((child) => {
        const Component = childrenMap[child];
        return Component ? <Component key={app.monster.name} /> : null;
    })

    return (
    <>
        {showChildren}
    </>
    )
}

export default Children