import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../storeManagement/AppContext';
import LinkModal from './LinkModal';

function SpecialLink({link}) {
    const {app} = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    let path = decodeURIComponent(location.pathname);
    let defPath = path === "/" ? '/Big Little Coder' : path;
    let focus = `/${link}` === defPath ? 'navFocus' : 'navNoFocus';
    let split = [...link];

    const showSplit = split.map((letter,i) =>         
        <span key={i} style={{'--i': i}} >{letter}</span>
    )

    link = link === 'Big Little Coder' ? '/' : link;
    link = link === 'Mark Anthony' ? 'MarkAnthony' : link;
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
