"use client"
import { useEffect, useState } from "react";

// Define the async function to fetch meal data by ingredient
async function getMealByIngredient(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.dir(data);  // Log the data to see the structure
        return data.meals || [];  // Ensure we return an empty array if no meals are found
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return [];  // Return an empty array if there is an error
    }
}

export default function MealIdea({ mealIngredient }) {

    const [meals, setMeals] = useState([]);  // State for storing meal data

    // Function to load meal ideas based on ingredient
    async function loadMealIdeas() {
        const mealsData = await getMealByIngredient(mealIngredient);  // Await the data fetch
        setMeals(mealsData);  // Set the state with the fetched data
    }

    // UseEffect hook to reload meal ideas whenever the ingredient changes
    useEffect(() => {
        loadMealIdeas();  // Call the async function to load meal ideas
    }, [mealIngredient]);  // Dependency on mealIngredient

    return (
        <div>
            <h2 className="text-white">Meal Ideas</h2>
            <p className="text-white">Here are some meal ideas using {mealIngredient}:</p>
            <div>
                {meals.length > 0 ? (  
                    meals.map((food) => (
                        <p className="p-2 m-2 bg-slate-900 max-w-sm text-white hover:bg-orange-500" key={food.idMeal}>{food.strMeal}</p>  // 
                    ))
                ) : (
                    <p>No meals found for {mealIngredient}.</p>  // 
                )}
            </div>
        </div>
    );
}
