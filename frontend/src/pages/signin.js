import React from 'react'
import { AccountBox } from "../components/accountBox";
import Navbar from '../components/navbar';

function signin() {
  return ( <>  <Navbar/>
    <div style={({display:'flex', justifyContent:'center'})}>
   
      <AccountBox/></div>
      </> )
}

export default signin