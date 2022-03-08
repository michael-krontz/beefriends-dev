import React from "react"
import '../App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./NavBar";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import AuthContent from "./AuthContent";
import Locate from "./Locate";
import Logo from "./Logo";
import SideBar from "./SideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div style={{ height: '100vh', backgroundImage: 'linear-gradient(#ffd15a, #ffa26d)' }}>
      <div id="page-wrap">
      <Router>
      <>
          <RecoilRoot>
            <header>
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <NavBar></NavBar>
            </header>
            <Logo></Logo>
            <Locate></Locate>
          </RecoilRoot>
          <Route path='/authcontent' component={AuthContent}/>
      </>
      </Router>
      </div>
    </div>
  )
}

export default App;
