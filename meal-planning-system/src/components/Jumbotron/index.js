import React, { useState, useContext } from 'react';
import "./style.css"
import {InputGroup, FormControl, Button } from 'react-bootstrap'
import { MyContext } from '../../context';
import axios from 'axios';

function AppJumbotron() {

  const [searchInput, setSearchInput] = useState("");
  const {setMeals} = useContext(MyContext);

  function handleSearch() {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      ).then((res) => res.json())
    .then((data) => setMeals(data.meals));
  }

  return (
    <div className="my-jumbotron">
      <h1>Welcome</h1>
      <h2>You Can Find The Meal You Are Looking For Here</h2>
      <div className="button-input">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search For Meal"
          aria-label="Meal Search Input"
          aria-describedby="meal-search-button"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button 
        variant="danger" 
        id="meal-search-button" 
        onClick={handleSearch}>
          Search
    </Button>
      </InputGroup>
      </div>
    </div>
  );
}

export default AppJumbotron;
