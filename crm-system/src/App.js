import React from 'react';
import './App.css';
import { Entry } from './pages/entry/EntryPage';
import { DefaultLayout } from './layout/DefaultLayout';
import { HomePage } from './pages/home/HomePage';
import { AddTicket } from './pages/new-ticket/AddTicketPage';
import { TicketListingPage } from './pages/ticket-listing/TicketListingPage';

function App() {
  return (
    <div className="App">
     {/*<Entry /> */}
     <DefaultLayout>
       {/* <HomePage /> */}
       {/* <AddTicket /> */}
       <TicketListingPage />
     </DefaultLayout>
    </div>
  );
}

export default App;
