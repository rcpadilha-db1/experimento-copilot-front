import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Detalhes } from '../pages/Detalhes';
const WebRouter = () => {
    return( 
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detalhes/:symbol' element={<Detalhes/>}/>
        </Routes>
    </Router>
)}

export default WebRouter;