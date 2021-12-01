import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TicketTable } from '../../components/tickettable/TicketTableComponent';
import tickets from '../../assets/data/dummy-tickets.json'
import { BreadcrumbPage } from '../../components/breadcrumb/BreadcrumbComponent';

export const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
        <BreadcrumbPage page="HomePage"/>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
        <Button variant="info" style={{fontSize: "2rem",
      padding: "10px 30px"}}>Add Ticket</Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>

      <Row>
      <Col className="mt-2">
         Recently Added Tickets
        </Col>
      </Row>

      <Row>
      <Col className="recent-ticket">
         <TicketTable tickets={tickets} />
        </Col>
      </Row>
        <hr />
    </Container>
  );
};