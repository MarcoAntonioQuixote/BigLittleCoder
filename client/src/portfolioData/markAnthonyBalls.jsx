let balls = [
    { image: 'textures/balls/water7.jpg', rotation: [.7,-.25,0], position: [0,0,0]},
]

const portfolioTiles = [
    {
        image: 'https://media.wired.com/photos/5d69aa67f919890009997643/master/w_2560%2Cc_limit/Oped-AI-Protecting-Black%2520and%2520Brown%2520Diaspora-LS011379.jpg',
        text: <h2><span>Connect</span> across the 🌍 with <span>Socket.IO</span></h2>,
    },
    {
        image: 'https://nestle-nespresso.com/sites/site.prod.nestle-nespresso.com/files/styles/crop_freeform/public/Nespresso-Signs-UN-Womens-Empowerment-Principles_1140x500.jpg?itok=RYftaEAm',
        text: <h2>Master <span>AI Integration</span> 🤖 for a smarter app experience </h2>
    },
    {
        image: 'https://i.pinimg.com/736x/3c/e4/39/3ce439a152a704da5f7e52c6902689ab.jpg',
        text: <h2>Bring the front and back end <span>together 🫂</span> with NodeJS</h2>
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
        image: '/textures/balls/water2.jpg',
        text: <h2>Build <span>dreams</span>, not just apps 🌈</h2>
    },
    {
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://www.webtekcc.com/wp-content/uploads/2015/07/wireframe-1024x628.jpg',
        text: <h2><span>React</span> to user needs, one component at a time ⚛️</h2>,
    },
    {
        image: 'https://www.framezhouse.com/wp-content/uploads/2023/04/3D-animation.jpg',
        text: <h2>From concept to code with <span>Wire Framing</span> 🎨</h2>
    },
    {
        image: 'https://poole.ncsu.edu/news/wp-content/uploads/sites/15/2020/04/social-media_shutterstock-1500x844-1.jpg',
        text: <h2>Step <span>outside</span> of the 2nd dimension, with <span>R3F</span></h2>
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
    {title: 'Cohorts', text: 'Ready to take a deep dive into the world of coding? Join our highly interactive cohorts and elevate your coding skills through collaborative learning.', image: '/gifs/blcVideo.gif'},
    {title: '1-on-1', text: "Get personalized, expert guidance to fast-track your coding journey with our 1-on-1 coaching sessions. Don't just learn to code—master it.", image: '/gifs/coder4.gif'},
]

export { balls, portfolioTiles, techTiles, coachingOptions }

//<sphereGeometry args={[1,32,32]} />

// { image: 'textures/balls/water1.jpg', rotation: [.5,5,0], position: [1,1,1]},
// { image: 'textures/balls/water5.jpg', rotation: [.7,-2,.4], position: [2,1,1]},