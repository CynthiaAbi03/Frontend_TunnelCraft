import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

import {
  ConnectionPage,
  LandingPage,
  CommencerPage,
  TokenPage,
  FacturationPage,
  AcceuilPage,
  ApplicationsPage
} from './pages'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/connection" element={<ConnectionPage/>}/>

        <Route path="/commencer" element={<CommencerPage/>}/>
        <Route path="/token" element={<TokenPage/>}/>
        <Route  path='facturation' element={<FacturationPage/>}/>
        <Route path = 'acceuil' element={<AcceuilPage/>}/>
        <Route path = 'applications' element={<ApplicationsPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
