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
      <>
        <div className='apiarist-info'>
            <div className='apiarist-header-wrapper'>
                <h3 className='apiarist-header'>Are you an Apiarist?</h3>
                <strong>Create a BeeFriends Account!</strong>
            </div>
            <p className='p-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero sit amet neque iaculis ullamcorper. Curabitur lacinia mauris magna, ac pretium enim lacinia at.</p>
            
            <div className='line-break'></div>
            
            <div className='bullet-wrapper'>
                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>Lorem Ipsum sit amet</h3>
                </div>

                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>Lorem Ipsum sit amet</h3>
                </div>

                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>Lorem Ipsum sit amet</h3>
                </div>

                <div className='bullet'>
                    <div className='bullet-icon'></div>
                    <h3 className='bullet-text'>Lorem Ipsum sit amet</h3>
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
                            <Link to={'/authcontent'} style={{ textDecoration: 'none', color: '#3e3e3e', fontSize: '14px' }} >Already have an account?</Link>
                        </div>
                    </CardContent>
                </Card>
            </Box>
      </div>

      </>
  )
}
