import React from 'react';
import './App.css';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './pages'
import signin from './pages/signin';
import Registerrest from './pages/Registerrest';
import Aboutus from './pages/Aboutus';
import FAQs from './pages/FAQs';
import contactus from './pages/contactus';
import loginasrestuarant from './pages/loginasres';


function App() {
  return (



    <><Router>
      <Switch>

      <Route path="/" exact component={index} />
      <Route path="/login" exact component={signin} />
      <Route path="/registerrestuarant" exact component={Registerrest} />
      <Route path="/aboutus" exact component={Aboutus} />
      <Route path="/FAQs" exact component={FAQs} />
      <Route path="/contactus" exact component={contactus} />
      <Route path="/loginasrestuarant" exact component={loginasrestuarant} />
      
     
      </Switch>


    </Router>
    </>
  );
}

export default App;
