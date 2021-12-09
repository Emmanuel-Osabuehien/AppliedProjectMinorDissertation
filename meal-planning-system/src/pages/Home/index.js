import React from 'react';
import AppJumbotron from '../../components/Jumbotron';
import axios from 'axios'
import { useEffect, useState } from 'react';
import MealsContainer from "../../components/MealsContainer"

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(({data}) => setMeals(data.meals))
    .catch((error) => console.log(console.error));
  }, []);
  return (
    <div>
      <AppJumbotron />
      <MealsContainer meals={meals}/>
    </div>
  );
}

export default Home;
