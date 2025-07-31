import React from 'react';
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


export async function generateMetadata({ params }) {
    //search params are parent dele kore dilam lagbhe an tai 
    // generate metadata doc theke asche eigula .
    // read route params
    const id  = await params.id;

    // fetch data
    //ekhane  amader je function oitare call kore dhibho 
    const [singleMeal] = await fetchSingleMeal(id);

    console.log(singleMeal)

    // previousImage apatoto amder lagbe na 

    return {
        title: singleMeal.strMeal,
        // open graph o amader apatoto lagtche na
        description:singleMeal.strInstructions
    }
}


const SingMealPage = async ({ params }) => {
    const id = await params.id;
    const meals = await fetchSingleMeal(id);
    // console.log(meals)
    return (
        <div>
            hello
        </div>
    );
};

export default SingMealPage;