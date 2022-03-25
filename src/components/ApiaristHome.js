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
      <div className='apiarist-home-wrapper'> 
        <div className='apiarist-info'>
            <div className='apiarist-header-wrapper'>
                <h3 className='apiarist-header'>This is going to be a tagline about connecting apiarists with customers.</h3>
                <strong>Create a BeeFriends Account! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something about saving the bees as well. </strong>
            </div>          
            <div className='line-break'></div>

            <div className='promo-image'>
                <div className='image'>Promo Image Here</div>
            </div>
            
            <div className='bullet-wrapper'>
                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>This is the first reason to sign up.</h3>
                </div>

                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>This is the second reason to sign up.</h3>
                </div>

                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>This is the third reason to sign up.</h3>
                </div>
            </div>
        </div>

        <div className='apiarist-card-wrapper'>
            <Box sx={{ '& > :not(style)': { m: 1, width: '95%', height: '100%' }, }}>
                    <Card variant='oulined'>
                        <CardContent>
                            <div className='cta-text'>
                            Lorem ipsum dolor sit amet, adipiscint.
                            </div>
                            <div className='link-wrapper'>
                            <ThemeProvider theme={theme}>
                                <Button component={Link} to={'/authcontent'} color="primary" variant="contained">Create Account</Button>
                            </ThemeProvider>
                            </div>
                            <div className='have-an-account'>
                                <Link to={'/authcontent'} className='link' style={{ fontSize: '14px' }} >Already have an account?</Link>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
        </div>
      </div>
  )
}
