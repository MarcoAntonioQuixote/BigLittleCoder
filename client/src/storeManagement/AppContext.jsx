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
        name: 'Vulpes',
        move: 'Idle'
    },
    scene:  {
        children: ['Monster'], //the <ChildComp /> you want to render at the scene
        mode: 'selection', //define all posible states?
        //selection --> start --> 
        instructions: 'Which Big Little Coder are You?',
    }
};