import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Navbar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<MarvelScreen />} />
                <Route path='/marvel' element={<MarvelScreen />} />
                <Route path='/dc' element={<DcScreen />} />
                <Route path='/login' element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
