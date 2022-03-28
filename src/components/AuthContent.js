import React from 'react'
import Box from '@mui/material/Box'
import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from "./ForgotPassword"
import UpdateAccount from "./UpdateAccount"
import Home from './Home'
import Results from './Results'

export default function AuthContent() {

  return (
    <div>
      <Box className="d-flex align-items-center justify-content-center" style={{ height: 'auto', minHeight: "50vh" }}>
        <div className="w-100" style={{ maxWidth: '600px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Redirect exact from="/authcontent" to="/dashboard" />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/update-account" component={UpdateAccount} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/" component={Home} />
                <Route path="/results" component={Results} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Box>
    </div>
  )
}