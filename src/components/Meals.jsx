import React from "react";
import MealItem from "./MealItem";

import { useEffect, useState } from "react";

const Meals = () => {
  const [mealsData, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch("http://localhost:3000/meals"); // inbuilt function which return the promise

      if (!res.ok) {
        //...
      }
      const meals = await res.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, [mealsData]);

  return (
    <ul id="meals">
      {mealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
