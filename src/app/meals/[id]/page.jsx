import React from 'react';
import MealSearch from '../Components/MealSearch';
import style from '../post/post.module.css'

export const metadata = {
    title: "All Meals",
    description: "meals loaded from meal api",
};
const fetchSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json();
        // setMeals(data?.meals || []);
        return data.meals;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}


const SingMealPage = async ({params}) => {
    const {id} = await params;
    const meals = await fetchSingleMeal(id);
    return (
        <div>
            <MealSearch></MealSearch>
            <div className='grid grid-cols-4 gap-4'>
                {
                    meals?.map((meal) => <div key={meal.idMeal}>
                        <h1 className={`text-2xl font-bold ${style['post-title']}`}>{meal.strMeal}</h1>
                        {/* jeheto  amra - use kore felchi tai evahe access korchi naile . diyeo use kora jeto  */}
                        <p>{meal.strInstructions}</p>


                    </div>)
                }
            </div>
        </div>
    );
};

export default SingMealPage;