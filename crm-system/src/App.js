import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import { Entry } from './pages/entry/EntryPage';
import { DefaultLayout } from './layout/DefaultLayout';
import { HomePage } from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
     {/*<Entry /> */}
     <DefaultLayout>
       <HomePage />
     </DefaultLayout>
    </div>
  );
}

export default App;
