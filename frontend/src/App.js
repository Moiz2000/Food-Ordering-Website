import React, { useState } from 'react';
import './App.css';



import { BrowserRouter as Router, Switch, Route , Routes } from 'react-router-dom';
import index from './pages'





function App() {
  return (



    <><Router>
      <Switch>

      <Route path="/" exact component={index} />
      </Switch>


    </Router>
    </>
  );
}

export default App;
