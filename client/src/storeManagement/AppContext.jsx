import { createContext } from "react";

export const AppContext = createContext(null);

export const appObject = 
{
    status: {
        mode: 'selection', //(speaker)
        started: false, //selected (passed selection mode)
        transitioning: false,
        next: null,
        currentPage: null,
    },
    assigned: [
        { page: "", speaker: null },
        { page: "Cohorts", speaker: null },
        { page: "1-on-1", speaker: null },
        { page: "Projects", speaker: null },
        { page: "MarkAnthony", speaker: null }
    ],
    load: {
        characters: ['Vulpes','Bunny','Cardinal','Fish','Tortoise','Toad'],
        moves: ['Idle', 'Jump', 'Run', 'Run_Wild', 'Trot', 'Turn', 'Turntable'],
    },
    monster: {
        name: 'Vulpes',
        move: 'Idle',
        others: null,
    },
    instructions: 'selection',
    children: [
        {type: 'select', component: 'Monster'} 
    ],
    secondCanvas: {
        tracking: null, //this will be all you have to set
        balls: 'headerMA', //other key-value pairs to track
        cohort: 'copyGlass',
    }
};

