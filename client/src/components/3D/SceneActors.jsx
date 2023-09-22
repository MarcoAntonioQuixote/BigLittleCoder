import React, { useContext } from 'react'
import { AppContext } from '../../storeManagement/AppContext'
import childrenMap from '../../utilities/allSceneChildren';

function SceneActors() {

    const {app} = useContext(AppContext);
    const children = app.children;

    const showChildren = children.map((child) => {
        const Component = childrenMap[child.component];

        if (!Component) return null;
        let info = {...child, name: child.name || app.monster.name};

        return (
            <Component key={info.name} info={info} />
        )
    })

    return (
    <>
        {showChildren}
    </>
    )
}

export default SceneActors