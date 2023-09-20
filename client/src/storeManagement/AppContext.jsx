import { createContext } from "react";

export const AppContext = createContext(null);

export const appObject = 
{
    powersOn: true,
    movement: [],
    load: {
        characters: ['Bunny','Vulpes','Cardinal','Fish','Tortoise','Toad'],
        moves: ['Idle', 'Jump', 'Run', 'Run_Wild', 'Trot', 'Turn', 'Turntable'],
    },
    monster: {
        name: 'Vulpes',
        move: 'Turntable'
    }
};