import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { MyContext } from '../../context';

function MealModal({ title, description, idMeal }) {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  console.log(idMeal)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToFavorites = () => {
    console.log('mealId', idMeal);
    setLoading(true);
    axios
      .post('/add-meals', { mealId: idMeal })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        alert('Meal Added To List');
      })
      .catch(err => {
        setLoading(false);
       console.log(err);
      });
  };

  const handleRemoveFromFavorites = () => {
    setLoading(true);
    axios
      .post('/remove-meals', { mealId: idMeal })
      .then(({ data }) => {
        setLoading(false);
        setUser(data)
        alert('Meal Removed From List')
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        See More
          </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
              </Button>
          {user && (
            <>
              {user.favorites.includes(idMeal) ? (
                <Button variant="danger" 
                onClick={handleRemoveFromFavorites}
                disabled={loading}>
                  Remove From List
                  </Button>
              ) : (
                  <Button variant="primary" 
                  onClick={handleAddToFavorites}
                  disabled={loading}>
                    Add To List
                  </Button>
                )}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MealModal
