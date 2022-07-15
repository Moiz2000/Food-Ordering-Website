import React from 'react';
import './App.css';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './pages'
import signin from './pages/signin';
import Registerrest from './pages/Registerrest';
import Aboutus from './pages/Aboutus';
import FAQs from './pages/FAQs';
import contactus from './pages/contactus';


function App() {
  return (



    <><Router>
      <Switch>

      <Route path="/" exact component={index} />
      <Route path="/login" exact component={signin} />
      <Route path="/Registerrestuarant" exact component={Registerrest} />
      <Route path="/aboutus" exact component={Aboutus} />
      <Route path="/FAQs" exact component={FAQs} />
      <Route path="/contactus" exact component={contactus} />
      
     
      </Switch>


    </Router>
    </>
  );
}

export default App;
