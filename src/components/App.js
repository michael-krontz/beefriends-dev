import React from "react"
import '../App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./NavBar";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import AuthContent from "./AuthContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <Router>
    <>
        <RecoilRoot>
          <header className = "App-header">
            <NavBar></NavBar>
          </header>
        </RecoilRoot>
        <Route path='/authcontent' component={AuthContent}/>
    </>
    </Router>
  )
}

export default App;
