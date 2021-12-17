import React, { useMemo } from 'react'
import queryString from 'query-string';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../hero/HeroeCard';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);


    const handleSearch = (e) =>{
        e.preventDefault();
        navigate(`?q=${formValues.searchText}`)

    }
    return (
        <>
            <h1>Searches</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            name="searchText" 
                            className='form-control'
                            placeholder='Search Hero...'
                            autoComplete='false'
                            value={formValues.searchText}
                            onChange={handleInputChange}
                        />

                        <button type='submit' className='btn btn-outline-primary mt-2'>
                            Search
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className='alert alert-info'>Search any Hero</div>
                            : (heroesFiltered.length === 0)
                                && <div className='alert alert-danger'>No results for {q}</div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard 
                                key={hero.id} 
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
