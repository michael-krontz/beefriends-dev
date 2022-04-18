import React from "react"
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import { RecoilRoot } from 'recoil';
import AuthContent from "./AuthContent";
import SideBar from "./SideBar";
import Home from "./Home";
import ApiaristHome from "./ApiaristHome";
import Signup from "./Signup";
import Results from "./Results";
import Profile from "./Profile";

function App() {
  return (
    <div style={{ height: 'calc(100vh)', backgroundImage: 'linear-gradient(#ffd15a, #ffa26d)' }}>
      <div id="page-wrap">
      <Router>
      <>
          <RecoilRoot>
            <header>
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <NavBar></NavBar>
            </header>
          </RecoilRoot>
          <Switch>
          <Route exact path='/' component={Home}/>         
          <Route path='/results' component={Results}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/apiaristhome' component={ApiaristHome}/>
          <Route path='/authcontent' component={AuthContent}/>
          </Switch>
      </>
      </Router>
      </div>
    </div>
  )
}

export default App;
