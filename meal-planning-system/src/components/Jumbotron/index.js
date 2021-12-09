import React from 'react';
import "./style.css"
import {InputGroup, FormControl, Button } from 'react-bootstrap'

function AppJumbotron() {
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
        />
        <Button variant="danger" id="meal-search-button">
          Search
    </Button>
      </InputGroup>
      </div>
    </div>
  );
}

export default AppJumbotron;
