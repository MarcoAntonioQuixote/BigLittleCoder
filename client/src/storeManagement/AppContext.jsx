import { createContext } from "react";

export const AppContext = createContext(null);

export const appObject = 
{
    selected: false,
    powersOn: true,
    movement: [],
    load: {
        characters: ['Vulpes','Bunny','Cardinal','Fish','Tortoise','Toad'],
        moves: ['Idle', 'Jump', 'Run', 'Run_Wild', 'Trot', 'Turn', 'Turntable'],
    },
    monster: {
        name: 'Vulpes',
        move: 'Idle'
    },
    mode: 'selection', //start (speaking), //miniatures
    instructions: 'selection',
    children: [
        {type: 'user', component: 'Monster'} 
    ]
    //all will need a type, component and name (what about non-monsters children you display?)
};

