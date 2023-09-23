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
                // transition.inProgress = true;
                // console.log('here? should be true!', transition)
            }
            break;
        case 'setInstructions':
            newState.instructions = payload;
            break;
        case 'goToPage':
            let newMon = newState.assigned.find(a => a.page === payload);
            status.next = newMon;
            
            break;
        case 'transition':
            status.transitioning = payload;
            if (payload === false) {
                console.log('AND when should this work!!?!');
                console.log(newState);
                
            }
            // if (payload === true) {
            //     console.log('transitioning!')
            // } else {
            //     console.log('finished transition!');
            // }
            // if (payload === false) {
                //     newState.children[1] = {...newState.children[1], name: transition.next.speaker};
                // }
                // console.log('transitioning');
                break;
        }
        // console.log({type},console.log(JSON.parse(JSON.stringify(newState))));
        // if (newState.transition.inProgress) {
        //     console.log('transitioning!')
        // } else {
        //     console.log('finished transitioning or (not)');
        // }
        console.log({type})
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