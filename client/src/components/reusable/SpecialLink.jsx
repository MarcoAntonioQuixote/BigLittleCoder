import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import LinkModal from './LinkModal';
import { AppContext } from '../../storeManagement/AppContext';

function SpecialLink({link}) {
    const {app} = useContext(AppContext);
    const [open, setOpen] = useState(false);
    //TODO: is there a way to not useLocation here?
    const location = useLocation();
    let path = decodeURIComponent(location.pathname);
    switch(path) {
        case '/': path = '/Big Little Coder'
            break;
        case '/MarkAnthony': path = '/Mark Anthony'
            break;
    }

    let focus = `/${link}` === path ? 'navFocus' : 'navNoFocus';
    let split = [...link];

    const showSplit = split.map((letter,i) =>         
        <span key={i} style={{'--i': i}} >{letter}</span>
    )
    switch(link) {
        case 'Big Little Coder': link = '/'
            break;
        case 'Mark Anthony': link = 'MarkAnthony'
            break;
    }
    link = app.status.started ? link : null;

    return (
    <>
        <Link onClick={() => setOpen(true)} to={link} className={focus}>
            <h2 >
                {showSplit}
            </h2>
        </Link>
        {!app.status.started && <LinkModal open={open} setOpen={setOpen} />}
    </>  
    )
}

export default SpecialLink;
