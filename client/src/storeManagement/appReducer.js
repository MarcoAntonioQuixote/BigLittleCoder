const appReducer = (state,action) => {
    let newState = {...state};
    let {movement} = newState;
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
    }
    return newState;
}

export default appReducer;