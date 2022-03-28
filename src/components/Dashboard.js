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
import useAxios, { configure } from 'axios-hooks'
import Axios from 'axios'
import LRU from 'lru-cache'

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

  const axios = Axios.create({
    baseURL: 'https://beefriends-development-default-rtdb.firebaseio.com/',
  })

  const cache = new LRU({ max: 10 })
  configure({ axios, cache })
  
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
    const [{ data: getData, loading: getLoading, error: getError }] = useAxios('beekeepers.json')
    if (getLoading) return <p>Loading...</p>
    if (getError) return <p>Error!</p>
    if (getData) {
      fetchData()
    }

    function fetchData() {
      var beekeeperData = getData  
      console.log(beekeeperData[0])
      console.log("fetching")
    }

  return (
    <div className='card-wrapper'>
        <Card variant="outline">
            <CardContent>               
                <Stack sx={{ width: '95%', margin: 'auto', marginTop: '15px', marginBottom: '8px' }} spacing={2}>
                {error && <Alert severity="error">{error}</Alert>}
                </Stack>
                <Box sx={{ '& > :not(style)': { m: 1, width: '95%' }, }} >
                    <div className='update-profile-wrapper'>
                        <div className='email-wrapper'>
                           {currentUser.email}
                        </div>
                        <Link to="/update-account" className="link">
                        Account Settings
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
