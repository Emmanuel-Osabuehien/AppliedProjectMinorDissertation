import React from 'react';
import MealCard from '../MealCard';
import "./style.css"

function MealsContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} {...meal}/>
      ))}
    </div>
  );
}

export default MealsContainer;
