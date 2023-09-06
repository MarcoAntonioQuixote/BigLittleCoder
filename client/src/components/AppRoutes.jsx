import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import OneOnOne from '../pages/OneOnOne';
import Cohorts from '../pages/Cohorts';
import Projects from '../pages/Projects';
import MarkAnthony from '../pages/MarkAnthony';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/1-on-1' element={<OneOnOne />} />
            <Route path='/cohorts' element={<Cohorts />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/markanthony' element={<MarkAnthony />} />
        </Routes>
    )
}

export default AppRoutes