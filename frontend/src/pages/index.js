import React from 'react'
import Navbar from '../components/navbar'
import "../css/index.css"
import { Link } from 'react-router-dom';
import image1 from "../images/a.png"
import image2 from "../images/2.jpeg"
import image3 from "../images/3.jpeg"
import a from "../images/items/a.jpeg"
import b from "../images/items/b.jpeg"
import c from "../images/items/c.jpeg"
import d from "../images/items/d.jpeg"
import e from "../images/items/e.jpeg"
import f from "../images/items/f.jpeg"
import g from "../images/items/g.jpeg"
import h from "../images/items/h.jpeg"
import i from "../images/items/i.jpeg"
import j from "../images/items/j.jpeg"



// import Ikhe from "../images/a.png"
// import image2 from "../images/2.jpeg"
// import image3 from "../images/3.jpeg"

function index() {
  return (<>
    <Navbar />
    <div className='app'>
      <h1>ClockiFood</h1>

      <div className='search'>


      <img src={image1} width="300px" height="300px" alt='img'/>
     <form className='searchbar'><input required="true" placeholder='search by your Area' className='searchinput' /><button className='searbtn'>Search</button> </form>
     <img src={image2} width="300px" height="300px" alt='img'/>


      </div>



    </div><hr></hr>

    <div className='app'>

      <h2>POPULAR CUISINES</h2>

      <div className='POPULARCUISINES'>

        <div className='items'><h2>Dricks</h2> <img src={a} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Appetizers</h2> <img src={b} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Sandwich</h2> <img src={c} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Pizza</h2> <img src={d} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Fast Food</h2> <img src={e} alt='aa' width="200px" height="160px" /></div>




      </div>

      <div className='POPULARCUISINES'>

        <div className='items'><h2>Salads</h2> <img img src={f} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Dessert</h2> <img img src={g} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>BBQ</h2> <img img src={h} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Pakistani</h2> <img img src={i} alt='aa' width="200px" height="160px" /></div>
        <div className='items'><h2>Italian</h2> <img img src={j} alt='aa' width="200px" height="160px" /></div>




      </div>

    </div> <hr></hr>

    <div className='app'>
      <h1>Schedule Your Order</h1>
      <h3><Link to="/login">Log in</Link> to get started</h3>
    </div><hr></hr>
    <div className='app'>
    <div className='app2'>
     
      <img src={image3} width="300px" height="300px" alt='img'/>
      <hr style={({ width: '0px', height:"100%", marginLeft:"100px", marginRight:'100px'})}/>
     <div><h3>Order Online</h3>
      <p>from hundreds of restaurant in your city</p></div> 
    </div>
</div>
  </>)
}

export default index