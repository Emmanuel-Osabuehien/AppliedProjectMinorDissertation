import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const TicketTable = ({tickets}) => {
  return (
    
     <Table striped bordered hover>
       <thead>

         <tr>
         <th>#</th>
         <th>Subject</th>
         <th>Status</th>
         <th>Opened Date</th>
         </tr>
       </thead>
       <tbody>
          {tickets.length ? (
          tickets.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">Tickets Unavaiable</td>
          </tr>
        )}
      </tbody>
     </Table>
    
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired
}