import React from 'react';

function OneOnOne() {

    let a = 
    <figure key='a' class="snip0016">
        <img className='slideImg' src="https://media.wired.com/photos/5d69aa67f919890009997643/master/w_2560%2Cc_limit/Oped-AI-Protecting-Black%2520and%2520Brown%2520Diaspora-LS011379.jpg" alt="sample43"/>
        <figcaption>
            <h2>Build <span>dreams</span>, not just apps 🌈</h2>
        </figcaption>			
    </figure>
    
    let b = 
    <figure key='b' class="snip0016">
        <img className='slideImg' src="https://nestle-nespresso.com/sites/site.prod.nestle-nespresso.com/files/styles/crop_freeform/public/Nespresso-Signs-UN-Womens-Empowerment-Principles_1140x500.jpg?itok=RYftaEAm" alt="sample41"/>
        <figcaption>
            <h2><span>Alt</span> your life & <span>Ctrl</span> your future 🕹️</h2>
        </figcaption>			
    </figure>

    let c = 
    <figure key='c' class="snip0016">
        <img className='slideImg' src="https://i.pinimg.com/736x/3c/e4/39/3ce439a152a704da5f7e52c6902689ab.jpg" alt="sample42"/>
        <figcaption>
            <h2>Think like a <span>machine</span>, only better 🧠</h2>
        </figcaption>			
    </figure>

    let children = [a,c,b];

    return (
        <div className='pageInSpeakerWindow aroundOnPage'>
            {children.map(c => c)}
        </div>
    )
}

export default OneOnOne;

//this has nice text that we're omiting in my version
let example = 
<figure class="snip0016">
    <img className='slideImg' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample42.jpg" alt="sample42"/>
    <figcaption>
        <h2>I suppose if we couldn't <span>laugh</span></h2>
        <p>At things that don't make sense, we couldn't react to a lot of life.</p>
        <a href="#"></a>
    </figcaption>			
</figure>