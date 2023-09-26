import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TechStack from './pages/TechStack';
import Coaching from './pages/Coaching';
import Projects from './pages/Projects';
import MarkAnthony from './pages/MarkAnthony';
import Home from './pages/Home';
import ContactMe from './pages/subPages/ContactMe';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/techstack' element={<TechStack />} />
            <Route path='/coaching' element={<Coaching />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/markanthony' element={<MarkAnthony />} />
            <Route path='/contact' element={<ContactMe/>} />
        </Routes>
    )
}

export default AppRoutes