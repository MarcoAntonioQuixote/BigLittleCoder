import { createContext } from "react";

export const AppContext = createContext(null);

export const appObject = 
{
    powersOn: true,
    movement: [],
    load: {
        characters: ['Vulpes','Bunny','Cardinal','Fish','Tortoise','Toad'],
        moves: ['Idle', 'Jump', 'Run', 'Run_Wild', 'Trot', 'Turn', 'Turntable'],
    },
    monster: {
        name: 'Bunny',
        move: 'Idle'
    },
    mode: 'selection', //start
    instructions: 'Which Big Little Coder are You?',
    children: ['Monster']
};