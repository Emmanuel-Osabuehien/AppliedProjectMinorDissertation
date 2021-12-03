import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BreadcrumbPage } from '../../components/breadcrumb/BreadcrumbComponent';
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistoryComponent';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicketComponent'

const ticket = tickets[0];

export const Ticket = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  }

  const handleOnSubmit = () => {
    alert('Reply Submitted')
  }
  
  return (
    <Container>
      <Row>
        <Col>
        <BreadcrumbPage page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="font-weight-bolder text-secondary">
        <div className="subject">Subject: {ticket.subject}</div>
        <div className="date">Opened: {ticket.addedAt}</div>
        <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
        <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
        <UpdateTicket msg={message} 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit} />
        </Col>
      </Row>
    </Container>
  );
};