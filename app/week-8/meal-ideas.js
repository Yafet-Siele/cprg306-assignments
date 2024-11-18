"use client"
import { useEffect, useState } from "react";

async function getMealByIngredient(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.dir(data); 
        return data.meals || [];  
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return [];  
    }
}

export default function MealIdea({ mealIngredient }) {

    const [meals, setMeals] = useState([]); 


    async function loadMealIdeas() {
        const mealsData = await getMealByIngredient(mealIngredient);  
        setMeals(mealsData);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [mealIngredient]); 

    return (
        <div>
            <h2 className="text-white">Meal Ideas</h2>
            <p className="text-white">Here are some meal ideas using {mealIngredient}:</p>
            <div>
                {meals.length > 0 ? (  
                    meals.map((food) => (
                        <p className="p-2 m-2 bg-slate-900 max-w-sm text-white hover:bg-orange-500" key={food.idMeal}>{food.strMeal}</p> 
                    ))
                ) : (
                    <p>No meals found for {mealIngredient}.</p> 
                )}
            </div>
        </div>
    );
}
