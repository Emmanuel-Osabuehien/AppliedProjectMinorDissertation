import React from 'react';
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "./AddTicketForm.css"

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt, frmDataErro}) => {
  console.log(frmDt)
  return (
   <Jumbotron className="mt-3 add-new-ticket bg-light">
     <h1 className="text-info text-center">Add New Ticket</h1>
     <hr />
     <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Subject</Form.Label>
            <Col sm={9}>
            <Form.Control 
              name="subject"
              value={frmDt.subject}
              //minLength="3"
              maxLength="200"
              onChange={handleOnChange}
              placeholder="Subject"
              required >
            </Form.Control>
            <Form.Text className="text-danger">
              {frmDataErro.subject && "*Field is required"}
              </Form.Text>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Date</Form.Label>
            <Col sm={9}>
            <Form.Control 
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required>
            </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control 
              as="textarea"
              name="details"
              rows="5"
              value={frmDt.details}
              onChange={handleOnChange}
              required>
            </Form.Control>
          </Form.Group>

          <Button type="submit" variant="info" block>Login</Button>
        </Form>
   </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired
};