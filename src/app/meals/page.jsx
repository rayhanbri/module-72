import React from 'react';
import MealSearch from '../Components/MealSearch';

const MealsPage =async({searchParams}) => {

    const query = await searchParams;
    
    const fetchMeal = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data?.meals || []);
            return data.meals;
        }
        catch(error){
            console.log(error);
            return [];
        }
    }

    
 const meals = await fetchMeal();
    return (
       <div>
        <MealSearch></MealSearch>
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