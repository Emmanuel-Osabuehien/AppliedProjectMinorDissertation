import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { MyContext } from '../../context';
import { LinkContainer } from 'react-router-bootstrap';
import MealCard from "../../components/MealCard"

function Favorites() {
  const { user } = useContext(MyContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user.favorites.length) {
      const requests = user.favorites.map((favorite) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite}`)
        .then((res) => res.json())
      );
      Promise.all(requests).then((res) => setFavorites(res));
      }
  }, [user]);
  if (!user.favorites.length) {
    return (<div>
      <h3>You Don't Seem To Have Any Meals Added</h3>
      <LinkContainer to="/">
        <Button>Please Add Some</Button>
      </LinkContainer>
    </div>
    );
  }


  return (
    <div>
      <h2>Here Are Your Meals</h2>
      <div className="meals-container">
      {favorites.map(({ meals: meal}) => (
        <MealCard key={meal[0].idMeal} {...meal[0]}/>
      ))}
    </div>
    </div>
  );
}

export default Favorites
