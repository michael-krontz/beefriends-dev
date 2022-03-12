import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

export default function ApiaristHome() {
  return (
      <div className='apiarist-card-wrapper'>
        <Box sx={{ '& > :not(style)': { m: 1, width: '95%', position: 'fixed', bottom: '0', marginRight: '10%' }, }}>
                <Card variant='oulined'>
                    <CardContent>
                        <div className='link-wrapper'>
                        <ThemeProvider theme={theme}>
                            <Button component={Link} to={'/authcontent'} color="primary" variant="contained">Create Account</Button>
                        </ThemeProvider>
                        <Link to={'/authcontent'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }} >Apiarist Login</Link>
                        </div>
                    </CardContent>
                </Card>
            </Box>
      </div>
  )
}
