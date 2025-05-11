// "use client";
// import { useEffect, useState } from "react";

// // Fetch meals based on the ingredient
// async function getMealByIngredient(ingredient) {
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//         const data = await response.json();
//         console.dir(data);
//         return data.meals || []; // Return empty array if no meals are found
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
//         return []; // Return empty array in case of error
//     }
// }

// export default function MealIdea({ mealIngredient }) {
//     const [meals, setMeals] = useState([]);

//     // Fetch and update meals when mealIngredient changes
//     async function loadMealIdeas() {
//         const mealsData = await getMealByIngredient(mealIngredient);
//         setMeals(mealsData); // Set the meals state with the fetched data
//     }

//     useEffect(() => {
//         loadMealIdeas();
//     }, [mealIngredient]); // Run effect when `mealIngredient` changes

//     return (
//         <div>
//             <h2>Meal Ideas</h2>
//             <div>Here are some meal ideas using {mealIngredient}:</div>
//             {meals.length === 0 ? (
//                 <p>No meal ideas found for {mealIngredient}.</p>
//             ) : (
//                 meals.map((food) => (
//                     <div key={food.idMeal}>
//                         <p>{food.strMeal}</p>
//                         <img src={food.strMealThumb} alt={food.strMeal} width="100" />
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }
