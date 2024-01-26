import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AccountPage from './pages/AccountPage';
import { userLoader } from './components/loaders';
import { UserProvider } from './components/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Appdataprovider() {
  return (
    <UserProvider>
      <App/>
    </UserProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Appdataprovider />,
    loader: userLoader,
    children: [
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "signin",
        element: <SignIn/>
      },
      {
        path: "accountpage",
        element: <AccountPage/>
      }
    ]
  }
])
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
