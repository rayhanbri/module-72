import React from 'react';
import MealSearch from '../Components/MealSearch';
import style from '../post/post.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight : ['400'],
   subsets: ["latin"],
})

export const metadata = {
    title: "All Meals",
    description: "meals loaded from meal api",
};

const MealsPage = async ({ searchParams }) => {
    const query = await searchParams;
    const fetchMeal = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data?.meals || []);
            return data.meals;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

  
    const meals = await fetchMeal();
    console.log(meals)
    return (
        <div>
            <MealSearch></MealSearch>
            <div className='grid grid-cols-6 gap-4'>
                {
                    meals?.map((meal) => <div key={meal.idMeal} className={roboto.className}>
                        {/* html imag  tag load all the image in api  */}
                        {/* <img src={meal.strMealThumb} alt={meal.strMeal} /> */}
                        {/* image use koarar  jonno  next config set  korte hobe  */}
                        <Image src={meal?.strMealThumb || '/default-image.jpg'} width={641} height={641} alt={meal?.strMeal}></Image>
                        <h1 className={`text-2xl font-bold ${style['post-title']}`}>{meal.strMeal}</h1>
                        {/* jeheto  amra - use kore felchi tai evahe access korchi naile . diyeo use kora jeto  */}
                        <p>{meal.strInstructions}</p>
                        <Link href={`/meals/${meal.idMeal}`}>Details</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MealsPage;