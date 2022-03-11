import React, { useRef, useState } from 'react'
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory} from 'react-router-dom'

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
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });


export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                return setError('Passwords do not match')
        } 

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

  return (
      <div className='card-wrapper'>
        <Card variant="outlined">
            <CardContent>
                <h2>Update Profile</h2>
                <Stack sx={{ width: '95%', margin: 'auto', marginTop: '15px', marginBottom: '8px' }} spacing={2}>
                    {error && <Alert severity="error">{error}</Alert>}
                </Stack>
                
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '95%' }, }} autoComplete="off" onSubmit = {handleSubmit}>
                    <TextField id="outlined-basic" type="email" label="Email" variant="outlined" inputRef={emailRef} defaultValue={currentUser.email} required/>
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" inputRef={passwordRef} placeholder='Leave blank to keep the same' required/>
                    <TextField id="outlined-basic" type="password" label="Password Confirmation" variant="outlined" inputRef={passwordConfirmRef} placeholder='Leave blank to keep the same' required/>
                    <ThemeProvider theme={theme}>
                        <Button disabled={loading} color="primary" variant="contained" type="submit">Update</Button>
                    </ThemeProvider>
                </Box>

            <Link to="/" className='link'>Cancel</Link>
            </CardContent>
        </Card>
      </div>
  )
}
