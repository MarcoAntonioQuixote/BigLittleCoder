import React, { useContext } from 'react'
import { AppContext } from '../../storeManagement/AppContext'
import Monster from './Monster';

function ShowCohort() {

    const {app} = useContext(AppContext);

    let otherMonsters = app.assigned.filter(a => a.page !== 'Cohorts').map((m,i) => ({type: 'select',name: m.speaker, index: i}));

    return (
        <>
            {otherMonsters.map(monster => <Monster key={monster.name} info={monster} />)}
        </>
    )
}

export default ShowCohort