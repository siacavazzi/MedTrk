import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { UserProvider } from './components/UserContext';
import SessionHandler from './components/SessionHandler';


function App() {


  return (
    <div >
      <UserProvider>
        <SessionHandler />
        <Header />
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
