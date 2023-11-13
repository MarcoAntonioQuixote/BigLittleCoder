let balls = [
    { image: 'textures/balls/water7.jpg', rotation: [.7,-.25,0], position: [0,0,0]},
]

const portfolioTiles = [
    {
        image: '/textures/balls/model5.jpg',
        text: <h2><span>Connect</span> with the 🌍, <span>wherever</span> you can </h2>,
    },
    {
        image: '/textures/balls/water5.jpg',
        text: <h2><span>Alt</span> your life & <span>Ctrl</span> your future 🕹️</h2>
    },
    {
        image: '/textures/balls/face1.jpg',
        text:<h2>Think like a <span>machine</span>, only better 🧠</h2>
    },
    {
        image: '/textures/balls/puppy1.jpg',
        text: <h2><span>Puppy 🐕</span></h2>
    },
    {
        image: '/textures/balls/water2.jpg',
        text: <h2>Build <span>dreams</span>, not just apps 🌈</h2>
    },
    {
        image: '/textures/balls/water4.jpg',
        text: <h2>Step <span>outside</span> of 2️⃣D, with <span>BLC</span></h2>
    },
    {
        image: '/textures/balls/model2.jpg',
        text: <h2><span>Stand up</span> for all the <span>good</span> you believe in ✊🏽</h2>
    },
    {
        image: '/textures/balls/model1.jpg',
        text: <h2><span>Model</span> your best behavior 😎</h2>
    },
    {
        image: '/textures/balls/water7.jpg',
        text: <h2><span>Perspective</span> signed, <span>Water Tribe</span> 🌊</h2>
    },
    {
        image: '/textures/balls/model3.jpg',
        text: <h2><span>Jump</span> like you can <span>fly</span> 🦚</h2>
    },
]

const techTiles = [
    {
        title: 'React',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        text: 'React ⚛️ to user needs, one component at a time'
    },
    {
        title: 'AI',
        image: 'https://cdn-icons-png.flaticon.com/512/1985/1985500.png',
        text: 'Master AI Integration 🤖 for a smarter app experience'
    },
    {
        title: '3D Rendering',
        image: 'https://cdn3d.iconscout.com/3d/premium/thumb/atom-8367793-6655885.png?f=webp',
        text: 'Step outside of the 2nd dimension with R3F',
        enlarge: true,
    },
    {
        title: 'Socket.IO',
        image: 'https://codesandbox.io/api/v1/sandboxes/k3h2l/screenshot.png',
        text: 'Connect across the 🌍 in real time with Socket.IO',
        enlarge: true,
    },
    {
        title: 'Wire Framing',
        image: 'https://cdn-icons-png.flaticon.com/512/8109/8109328.png',
        text: 'From concept to code with Wire Framing 🎨'
    },
    {
        title: 'NodeJS',
        image: 'https://static-00.iconduck.com/assets.00/nodejs-plain-icon-226x256-hqi690bd.png',
        text: 'Bring the front and back end together 🫂 with NodeJS'
    },
]

const coachingOptions = [
    {
        title: 'Cohorts', 
        video: true, 
        text: 'Ready to take a deep dive into the world of coding? Join our highly interactive cohorts and elevate your coding skills through collaborative learning.', 
        image: '/gifs/blcVideo.gif', 
        link: '/cohorts'},
    {
        toHide: true
    },
    {
        title: '1-on-1', 
        video: true, 
        text: "Get personalized, expert guidance to fast-track your coding journey with our 1-on-1 coaching sessions. Don't just learn to code—master it.", 
        image: '/gifs/coder4.gif',
        link: '/1-on-1'
    },
]

export { balls, portfolioTiles, techTiles, coachingOptions }

//<sphereGeometry args={[1,32,32]} />

// { image: 'textures/balls/water1.jpg', rotation: [.5,5,0], position: [1,1,1]},
// { image: 'textures/balls/water5.jpg', rotation: [.7,-2,.4], position: [2,1,1]},

//TODO: There is a third option that we should remove (instead, colors might need to be saved in JS instead of CSS - where they are defined from 1-6)