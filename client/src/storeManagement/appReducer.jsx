import { shuffleArray } from "../utilities/mathFunctions";

const appReducer = (state,action) => {
    let newState = {...state};
    let {monster,load,children} = newState; //why did mode and instructions not work?
    let {type,payload} = action;

    switch(type) {
        case 'mouseMove':
            //save an array of 10-12
            movement.unshift(payload);
            if (movement.length > 10) {
                movement.pop();
            }
            break;
        case 'catchUp':
            movement.unshift(movement[0]);
            movement.pop();
            break;
        case 'selectMonster':
            monster.name = payload;
            break;
        case 'selectMove':
            monster.move = payload;
            break;
        case 'selectMode':
            newState.mode = payload;
            if (payload === 'start') {
                let others = load.characters.filter(c => c !== monster.name);
                monster.others = shuffleArray(others);
                children[0] = { ...children[0],
                    name: monster.name,
                    type: 'userBack'
                }
                let other = {
                    type: 'speaker', 
                    component: 'Monster', 
                    name: monster.others[0]
                }; //I don't like this structure - clean it up
                children.push(other);
                newState.selected = true;
            }
            break;
        case 'setInstructions':
            newState.instructions = payload;
            break;
    }
    return newState;
}

export default appReducer;

/* 
    There will be other scenes, but here's what I got
        Selection -- Start -- 
        
    children - could be 1, 2, or 6

        We need to know the mode to know the # of children

        if Selection) 
            Just 1 child - set by default
        if Start) - speaking (poke style)
            Just 2 children - 1 vs 1 of the other 5
        
    3) Miniatures, in the glass (showcasing a scene, 1v1, classroom, playing games, etc);


        

*/