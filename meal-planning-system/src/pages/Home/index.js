import React from 'react';
import AppJumbotron from '../../components/Jumbotron';
import { useContext, useEffect } from 'react';
import MealsContainer from "../../components/MealsContainer"
import { MyContext } from '../../context';

function Home() {
  const {meals, setMeals} = useContext(MyContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMeals(data.meals);
    })
    .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <AppJumbotron />
      <MealsContainer meals={meals}/>
    </div>
  );
}

export default Home;
