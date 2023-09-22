const instructions = {
    start: `Cool! Let's check out this journey together!`
}

const getText = (next,specialValue) => {
    //make it dynamic by using specialValue
    return instructions[next];
}

export default getText;