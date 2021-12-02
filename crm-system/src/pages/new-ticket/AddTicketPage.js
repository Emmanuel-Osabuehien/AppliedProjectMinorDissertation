import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbPage } from '../../components/breadcrumb/BreadcrumbComponent';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketFormComponent'
import { shortText } from '../../utilities/Validation'

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: ""
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  details: false
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataErro]);


  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setFrmData({
      ...frmData,
      [name]: value
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataErro(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject)

     setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log("Form Recieved", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
        <BreadcrumbPage page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
        <AddTicketForm 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        frmDt={frmData}
        frmDataErro={frmDataErro}/>
        </Col>
      </Row>
    </Container>
  );
};