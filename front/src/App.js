import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { UserProvider } from './components/UserContext';


function App() {


  return (
    <div >
      <UserProvider>
        <Header />
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
