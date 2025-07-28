"use client"
import React, { useEffect, useState } from 'react';

const MealsPage =  () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeal = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            setMeals(data?.meals || []);
            return data.meals;
        }
        catch(error){
            console.log(error);
            return [];
        }
    }

    useEffect(()=>{
        fetchMeal()

    },[search])
    // console.log(meals);

    return (
       <div>
        <div className='text-center'>
            <input  placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
         <div className='grid grid-cols-4 gap-4'>
            {
                meals?.map((meal)=><div key={meal.idMeal}>
                    <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
                    <p>{meal.strInstructions}</p>


                </div>)
            }
        </div>
       </div>
    );
};

export default MealsPage;