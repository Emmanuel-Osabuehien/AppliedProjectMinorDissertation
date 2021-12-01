import React from 'react';
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import PropTypes from 'prop-types';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
	return (
    <Container>
      <Row>
        <Col>
        <h1 className="text-info text-center">New Password</h1>
        <hr />
        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email"
              required>
          
            </Form.Control>
          </Form.Group>
         

          <Button type="submit">Reset Password</Button>
        </Form>
        <hr />
        </Col>
      </Row>

      <Row>
        <Col>
        <a href="#!" onClick={() => formSwitcher('login')}>Back To Login</a>
        </Col>
      </Row>
    </Container>
  )
};

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    };