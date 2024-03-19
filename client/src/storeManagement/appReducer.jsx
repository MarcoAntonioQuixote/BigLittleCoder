import { shuffleArray } from "../utilities/mathFunctions";

let emojis = {
    Fish: '🐟',
    Vulpes: '🦊',
    Toad: '🐸',
    Tortoise: '🐢',
    Cardinal: '🐦',
    Bunny: '🐇'
}

const appReducer = (state,action) => {
    let newState = {...state};
    let {monster,load,children,status} = newState; //why did mode and instructions not work?
    let {type,payload} = action;

    switch(type) {
        case 'selectMonster':
            monster.name = payload;
            break;
        case 'selectMove':
            monster.move = payload;
            break;
        case 'selectMode':
            status.mode = payload;
            if (payload === 'speaker') {
                console.log('OldS', newState)
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
                console.log('NewS', newState)
            }
            break;
        case 'setInstructions':
            // const speaker = newState.status.next?.speaker;
            // newState.instructions = `${speaker ? `${emojis[speaker]}:` : ''} ${payload}`;
            newState.instructions = payload;
            break;
        case 'setPage':
            status.currentPage = payload;
            break;
        case 'goToPage':
            status.currentPage = payload;
            let newMon = newState.assigned.find(a => a.page.toLowerCase() === payload.toLowerCase());
            newMon = newMon ? newMon : newState.assigned[0];
            status.next = newMon;
            status.transitioning = true;
            break;
        case 'transition':
            //payload will need to specify 2 things: 1) that the transition is starting or finalizing and 2) that the transition has reached the halfway point, so the new monster needs to be converted to a child component; payload.inProgress, payload.bringNext
            status.transitioning = payload.inProgress;
            if (payload.bringNext) {
                children[1] = {...children[1], name: status.next.speaker};
            }
            break;
        case 'track':
            newState.secondCanvas.tracking = payload; //like balls
            break;
        case 'dimensions':
            newState.dimensions = payload;
            break;
        }
        // console.log(newState.status.currentPage);
        return newState;
}

export default appReducer;
