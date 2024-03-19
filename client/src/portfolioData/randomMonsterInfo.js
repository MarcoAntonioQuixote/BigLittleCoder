import { randomNum } from "../utilities/mathFunctions"

let monsterOptions = {
    selection: [
        `Which Big Little Coder are You?`
    ],
    home: [
        `Big Little Coder helps you dream big with little baby steps along the way. 👟`,
        `Big Little Coder is here to help awaken the coder inside of you.`
    ],
    coaching: [
        'Want to learn in a group setting? Or 1-on-1?'
    ],
    techstack: [
        `What's in the stack? What are we learning?`
    ],
    projects: [
        `Play Explorio Party with a friend! Or try out this React 3D Demo!`
    ],
    markanthony: [
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
    chatstart: [
        'What do you want to chat about?',
        'Ooh, you do want to talk! 😎',
        "Awesome, I'm all ears... 👂🏽",
        "Hey, you're typing!",
        "I see you've started. What's up?",
        "You've got my attention! 🌟"
    ],
    chathalfway: [
        "Whoa, you don't say?",
        "Quite the set up...",
        "This is going somewhere good 😀",
        "I think I see where this is going 🤙🏽"
    ],
    chatend: [
        "Whoa, I'm just a little animal. That's quite a lot!",
        "Space is running out!",
        "Whoa, that's a lot! 😳",
        "Running low on space here!",
        "You're quite the chatterbox!",
        "Keep it short, buddy!",
        "Slow down, you're almost out of room!"
    ],
    chatreset: [
        "Ahh, how the tables have turned yet again.",
        "Whoa, this again! 😊",
        "Whoa, this again?",
        "Round two or seven or three. I don't know, I'm still learning to count. 💯",
        "Deja vu! Didn't we just do this? 🔄",
        "Reset button hit. Let's go again! 🎉",
        "New convo, who dis?",
        'What do you want to chat about?',
    ],
    landing: [
        "I'm glad to see ya here! 🔥"
    ],
    oops: [
        "Looks like there's been a mistake. You came here for "
    ]
}

function dynamicText(topic) {
    
    topic = topic.toLowerCase();
    let prop = monsterOptions[topic];
    let i = randomNum(0,prop?.length - 1);
    let response = prop ? prop[i] : `${monsterOptions['oops'][0]} ${topic}?`;
    return response;
}

export default dynamicText;