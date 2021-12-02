import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BreadcrumbPage } from '../../components/breadcrumb/BreadcrumbComponent';
import { SearchForm } from '../../components/search-form/SearchFormComponent';
import { TicketTable } from '../../components/tickettable/TicketTableComponent';
import tickets from '../../assets/data/dummy-tickets.json'

export const TicketListingPage = () => {

  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);
  
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {

    const displayTicket = tickets.filter((row) => 
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

  setDispTicket(displayTicket);
  };

  return (
<Container>
  <Row>
    <Col>
    <BreadcrumbPage page="Ticket Listing">
    </BreadcrumbPage>
    </Col>
  </Row>
  <Row className="mt-4">
    <Col>
   <Button variant="info">Add Ticket</Button>
    </Col>
    <Col className="text-right">
      <SearchForm 
      handleOnChange={handleOnChange}
      str={str}/>
    </Col>
  </Row>
  <hr />
  <Row>
    <Col>
    <TicketTable tickets={dispTicket}/>
    </Col>
  </Row>
</Container>
  );
};