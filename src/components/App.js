import React from "react"
import '../App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./NavBar";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import AuthContent from "./AuthContent";
import Locate from "./Locate";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#ffd15a' }}>
      <Router>
      <>
          <RecoilRoot>
            <header>
              <NavBar></NavBar>
            </header>
            <Logo></Logo>
            <Locate></Locate>
          </RecoilRoot>
          <Route path='/authcontent' component={AuthContent}/>
      </>
      </Router>
    </div>
  )
}

export default App;
