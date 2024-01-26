import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { UserProvider } from './components/UserContext';
import SessionHandler from './components/SessionHandler';
import { useUser } from './components/UserContext';
import { useLoaderData } from 'react-router-dom';


function App() {
  let user = useLoaderData();
  const { updateUser } = useUser();

  useEffect(() => {
    if (user) {
      console.log(user);
      updateUser(user); // Update the user in context if user data is present
    }
  }, [user]);

  return (

      <div >

        <Header />
        <Outlet />

      </div>

  );
}

export default App;
