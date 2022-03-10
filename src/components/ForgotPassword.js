import React, { useRef, useState } from 'react'
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom"

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

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

  return (
      <div className='card-wrapper'>
        <Card variant="outlined">
            <CardContent>
                <h2>Password Reset</h2>
                <Stack sx={{ width: '95%', margin: 'auto', marginTop: '15px', marginBottom: '8px' }} spacing={2}>
                    {error && <Alert severity="error">{error}</Alert>}
                    {message && <Alert severity="success">{message}</Alert>}
                </Stack>

                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '95%' }, }} autoComplete="off" onSubmit = {handleSubmit}>
                <TextField id="outlined-basic" type="email" label="Email" variant="outlined" inputRef={emailRef} required/>
               
                <ThemeProvider theme={theme}>
                    <Button disabled={loading} color="primary" variant="contained" type="submit">Reset Password</Button>
                </ThemeProvider>
                </Box>

                <div className='login-link-wrapper'>
                    <Link to="/login" className='link'>Login</Link>
                    <Link to="/signup" className='link'>Create Account</Link>
                </div>
{/* 
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-3" type="submit">Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Login</Link>
                </div> */}
            </CardContent>
        </Card>
        {/* <div className='w-100 text-center mt-2'>
        Need an Account? <Link to="/signup">Sign Up</Link>
        </div> */}
      </div>
  )
}
