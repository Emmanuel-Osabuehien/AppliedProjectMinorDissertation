import React from 'react';
import MealCard from '../MealCard';
import "./style.css"

function MealsContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals.map((meal, idx) => (
        <MealCard {...meal}/>
      ))}
    </div>
  );
}

export default MealsContainer;
