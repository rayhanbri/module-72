"use client";
import { usePathname, useRouter } from 'next/navigation';
// next  navigation is must 
import React, { useEffect, useState } from 'react';

const MealSearch = () => {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        // fetchMeal()
        const searchQuery = {search};
        const urlQuery = new URLSearchParams(searchQuery)
        const url =`${pathName}?${urlQuery}`;
        router.push(url)

    }, [search])
    // console.log(meals);

    return (
        <div className='text-center'>
            <input placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default MealSearch;