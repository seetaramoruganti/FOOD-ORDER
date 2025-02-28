import React from "react";

import { useEffect } from "react";

const Meals = () => {
  async function fetchMeals() {
    const res = await fetch("http://localhost:3000/meals"); // inbuilt function which return the promise

    if (!res.ok) {
      //...
    }
    const meals = await res.json();
  }

  return <ul id="meals"></ul>;
};

export default Meals;
