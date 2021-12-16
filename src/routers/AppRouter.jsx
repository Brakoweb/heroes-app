import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/*' element={<DashBoardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
