import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import { Entry } from './pages/entry/EntryPage';
import { DefaultLayout } from './layout/DefaultLayout';

function App() {
  return (
    <div className="App">
     {/*<Entry /> */}
     <DefaultLayout>
       //Dashboard
     </DefaultLayout>
    </div>
  );
}

export default App;
