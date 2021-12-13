import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { MyContext } from '../../context';
import { LinkContainer } from 'react-router-bootstrap';

function Favorites() {
  const { user } = useContext(MyContext);
  useEffect(() => {
    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  }, []);
  if(!user.favorites.length)  {
    return ( <div>
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
    </div>
  );
}

export default Favorites
