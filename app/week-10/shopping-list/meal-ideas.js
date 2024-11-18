"use client"
import { useEffect, useState } from "react";

// Define the async function to fetch meal data by ingredient
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
        if (mealIngredient) {
            const mealsData = await getMealByIngredient(mealIngredient); 
            setMeals(mealsData);  
        } else {
            setMeals([]);
        }
    }

    useEffect(() => {
        loadMealIdeas();  
    }, [mealIngredient]); 

    return (
        <div className="text-white h-screen bg-black">
            <h2 className="text-xl font-bold">Meal Ideas</h2>
            <div>
                {meals.length > 0 ? (  
                    meals.map((food) => (
                        <div>
                        <p>Here are some meal ideas using {mealIngredient}:</p>
                        <p className="p-2 m-2 bg-slate-900 max-w-sm hover:bg-orange-500" key={food.idMeal}>{food.strMeal}</p>
                        </div>  
                    ))
                ) : (
                    <p>No meal ideas found for this {mealIngredient}</p> 
                )}
            </div>
        </div>
    );
}
