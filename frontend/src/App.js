import React from 'react';
import './App.css';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './pages'
import signin from './pages/signin';
import Registerrest from './pages/Registerrest';
import Aboutus from './pages/Aboutus';
import FAQs from './pages/FAQs';
import contactus from './pages/contactus';
<<<<<<< HEAD
import Admin from "./pages/Admin"
=======
import loginasrestuarant from './pages/loginasres';
>>>>>>> 75497d88140ad1a17eb3da37b6908bbe46769779


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
<<<<<<< HEAD
      <Route path="/admin" exact component={Admin} />
     
=======
      <Route path="/loginasrestuarant" exact component={loginasrestuarant} />
      
>>>>>>> 75497d88140ad1a17eb3da37b6908bbe46769779
     
      </Switch>


    </Router>
    </>
  );
}

export default App;
