import React from 'react';
import './App.css';
import { Entry } from './pages/entry/EntryPage';
import { DefaultLayout } from './layout/DefaultLayout';
import { HomePage } from './pages/home/HomePage';
import { AddTicket } from './pages/new-ticket/AddTicketPage';

function App() {
  return (
    <div className="App">
     {/*<Entry /> */}
     <DefaultLayout>
       {/* <HomePage /> */}
       <AddTicket />
     </DefaultLayout>
    </div>
  );
}

export default App;
