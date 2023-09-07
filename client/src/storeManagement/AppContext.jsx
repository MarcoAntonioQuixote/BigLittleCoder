import { createContext } from "react";

export const AppContext = createContext(null);

export const appObject = 
{
    powersOn: true,
    movement: [],
    monster: {
        name: 'Bunny'
    }
};