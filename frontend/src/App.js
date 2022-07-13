import React from 'react';
import './App.css';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './pages'
import signin from './pages/signin';





function App() {
  return (



    <><Router>
      <Switch>

      <Route path="/" exact component={index} />
      <Route path="/login" exact component={signin} />
      </Switch>


    </Router>
    </>
  );
}

export default App;
