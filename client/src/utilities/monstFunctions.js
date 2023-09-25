import { randomNum } from "./mathFunctions";

const monsterInfo = {
    Vulpes: { type: 'Fox' },
    Toad: { type: 'Frog' },
    Cardinal: { type: 'Bird' },
    Tortoise: { type: 'Turtle' },
    Bunny: { type: 'Bunny' },
    Fish: { type: 'Amphibious Fish' },
}

const qualities = [
    'sweet, helpful',
    'sinister, chaotic',
    'adventurous, thrill-seeking',
    'sarcastic, sassy',
    'bubbly, emoji-laden',
    'extremely wise, like Yoda',
    'mysterious, elusive',
    'blunt, straightforward',
    'ambitious, relentless',
    'charismatic, social butterfly',
    'pragmatic, logical',
    'impulsive, spontaneous'
];

function getMonsterInfo(name) {
    const info = {
        qualities: qualities[randomNum(0,qualities.length-1)],
        animal: monsterInfo[name].type,
    }
    return info;
}

export { getMonsterInfo }