import { randomNum } from "../utilities/mathFunctions"

let monsterOptions = {
    selection: [
        `Which Big Little Coder are You?`
    ],
    Home: [
        `Big Little Coder helps you dream big with little baby steps along the way. 👟`,
        `Big Little Coder is here to help awaken the coder inside of you.`
    ],
    Coaching: [
        'Want to learn in a group setting? Or 1-on-1?'
    ],
    TechStack: [
        `What's in the stack? What are we learning?`
    ],
    Projects: [
        `Our featured project uses Socket.IO! First to touch fire is out ☠️! It only works if you play with a friend!`
    ],
    MarkAnthony: [
        `He's a cool guy - he helped bring me and my friends to life! 🔥`
    ],
    cohorts: [
        "Awesome! I'm excited you're interested in our Big Little Coder cohorts!",
        "Read up on our cohorts or contact us to request more info and to sign up!",
        "Don't forget: one-on-one sessions are included so you have extra support!"
    ],
    '1-on-1': [
        'These sessions are personalized just for you!',
        '1-on-1 sessions are a great way to do a deep dive into your specific needs!'
    ],
    contact: [], //no instructions on this page
    loading: [
        'Whoa',
        "Let me think",
        '...interesting',
    ],
    chatStart: [
        'What do you want to chat about?',
        'Ooh, you do want to talk! 😎',
        "Awesome, I'm all ears... 👂🏽",
        "Hey, you're typing!",
        "I see you've started. What's up?",
        "You've got my attention! 🌟"
    ],
    chatHalfway: [
        "Whoa, you don't say?",
        "Quite the set up...",
        "This is going somewhere good 😀",
        "I think I see where this is going 🤙🏽"
    ],
    chatEnd: [
        "Whoa, I'm just a little animal. That's quite a lot!",
        "Space is running out!",
        "Whoa, that's a lot! 😳",
        "Running low on space here!",
        "You're quite the chatterbox!",
        "Keep it short, buddy!",
        "Slow down, you're almost out of room!"
    ],
    chatReset: [
        "Ahh, how the tables have turned yet again.",
        "Whoa, this again! 😊",
        "Whoa, this again?",
        "Round two or seven or three. I don't know, I'm still learning to count. 💯",
        "Deja vu! Didn't we just do this? 🔄",
        "Reset button hit. Let's go again! 🎉",
        "New convo, who dis?",
        'What do you want to chat about?',
    ]
}

function dynamicText(topic) {
    let i = randomNum(0,monsterOptions[topic].length - 1);
    return monsterOptions[topic][i];
}

export default dynamicText;