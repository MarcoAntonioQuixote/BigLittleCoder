import { shuffleArray } from "../utilities/mathFunctions";

const appReducer = (state,action) => {
    let newState = {...state};
    let {monster,load,children,status} = newState; //why did mode and instructions not work?
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
            status.mode = payload;
            if (payload === 'speaker') {
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
                status.started = true;
                newState.assigned = newState.assigned.map((c,i) => ({...c, speaker: monster.others[i]}));
                status.transitioning = true;
            }
            break;
        case 'setInstructions':
            newState.instructions = payload;
            break;
        case 'goToPage':
            let newMon = newState.assigned.find(a => a.page === payload);
            status.next = newMon;
            status.transitioning = true;
            break;
        case 'transition':
            //payload will need to specify 2 things: 1) that the transition is starting or finalizing and 2) that the transition has reached the halfway point, so the new monster needs to be converted to a child component; payload.inProgress, payload.bringNext
            status.transitioning = payload.inProgress;
            if (payload.bringNext) {
                console.log(status.next);
                console.log(children[1]);
                children[1] = {...children[1], name: status.next.speaker};
            }
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