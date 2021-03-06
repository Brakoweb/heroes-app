import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../components/ui/NavBar";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/hero/HeroeScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route index element={<MarvelScreen />} />
                    <Route path='marvel' element={<MarvelScreen />} />
                    <Route path='dc' element={<DcScreen />} />
                    <Route path='search' element={<SearchScreen />} />
                    <Route path='hero/:ID' element={<HeroeScreen />} />
                </Routes>
            </div>
            
        </>
    )
}
