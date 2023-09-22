const instructions = {
    selection: `Which Big Little Coder are You?`,
    start: `Cool! Let's check out this journey together!`
}

const getText = (next,specialValue) => {
    //make it dynamic by using specialValue
    return instructions[next];
}

export default getText;