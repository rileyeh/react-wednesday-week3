import React from 'react';
import './App.css';

import Header from './components/Header'
import Holder from './components/Holder'
import Data from './data'

function App() {
  return (
    <div>
      <div className="header">
      <Header />
      </div>

      <div className="holder">
      <Holder data={Data}/>
      </div>
    </div>
  );
}

export default App;
