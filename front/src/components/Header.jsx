import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useUser } from '../components/UserContext';
import { BASE_URL } from '../constants';

export default function Header() {
  const { user } = useUser();
    const navigate = useNavigate();
    function logOut() {
      const OPTIONS = {
        method: "POST",
        credentials: 'include'
    }
        fetch(`${BASE_URL}/logout`, OPTIONS)
        .then(resp => resp.json)
        .then(data => console.log(data))
    }


    return (
        <div>
            <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {user ? `Welcome, ${user.fname}`: "Please Sign In"}
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          {user ? <Button onClick={() => logOut()} href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>My Account</Button>:<Button onClick={() => navigate('/signin')} href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>}
        </Toolbar>
      </AppBar>
        </div>
    )
}
