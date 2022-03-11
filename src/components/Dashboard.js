import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link, useHistory } from 'react-router-dom'

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#F5B64F',
        darker: '#E79800',
      },
      neutral: {
        main: '#F9F9F9',
        contrastText: '#363636',
      },
    },
  });


export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push("/login")

        } catch {
            setError('Failed to log out')
        }
    }

  return (
    <div className='card-wrapper'>
        <Card variant="outline">
            <CardContent>
                <h2>Profile</h2>
                
                <Stack sx={{ width: '95%', margin: 'auto', marginTop: '15px', marginBottom: '8px' }} spacing={2}>
                {error && <Alert severity="error">{error}</Alert>}
                </Stack>
                <Box sx={{ '& > :not(style)': { m: 1, width: '95%' }, }} >
                    <div className='update-profile-wrapper'>
                        <div className='email-wrapper'>
                            <strong>Email: </strong> {currentUser.email}
                        </div>
                        <Link to="/update-profile" className="link">
                        Update Profile
                        </Link>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained" onClick={handleLogout}>Log Out</Button>
                    </ThemeProvider>
                </Box>
            </CardContent>
        </Card>
    </div>
  )
}
