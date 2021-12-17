import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroeCard 
                    key={hero.id}
                    {...hero}
                    />
                ))
            }
        </div>
    )
}
