import { randomNum } from "../utilities/mathFunctions"

let monsterOptions = {
    start: [
        'What do you want to chat about?',
        'Ooh, you do want to talk! 😎',
        "Awesome, I'm all ears... 👂🏽",
        "Hey, you're typing!",
        "I see you've started. What's up?",
        "You've got my attention! 🌟"
    ],
    halfway: [
        "Whoa, you don't say?",
        "Quite the set up...",
        "This is going somewhere good 😀",
        "I think I see where this is going 🤙🏽"
    ],
    end: [
        "Whoa, I'm just a little animal. That's quite a lot!",
        "Space is running out!",
        "Whoa, that's a lot! 😳",
        "Running low on space here!",
        "You're quite the chatterbox!",
        "Keep it short, buddy!",
        "Hold on, almost out of room!"
    ]
}

export function returnText(topic) {
    let i = randomNum(0,monsterOptions[topic].length - 1);
    return monsterOptions[topic][i];
}
