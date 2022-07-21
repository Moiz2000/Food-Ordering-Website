import React from 'react'
import Navbar from '../components/navbar'
import "../css/index.css"
import { Link, useHistory } from 'react-router-dom';
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

function Index() {
  const history = useHistory();
  return (<>
    <Navbar />
    <div className='app'>
      <h1>ClockiFood</h1>

      <div className='search'>
        <div className='bg-food-img'>
          <form className='searchbar'><input required="true" placeholder='search by your Area' className='searchinput'

          />
            <button className='searbtn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>

            </button></form>
        </div>

        {/* <img src={image1} style={({border: "none" ,animation: "rotate 60s linear 0s infinite normal"})} width="300px" height="300px" alt='img'/>
     <form className='searchbar'><input required="true" placeholder='search by your Area' className='searchinput' /><button className='searbtn'>Search</button> </form>
     <img src={image2} width="300px" height="300px" alt='img'/> */}


      </div>



    </div><hr></hr>

    <div className='app'>


      <h2>POPULAR CUISINES</h2>

      <div className='POPULARCUISINES'>

        {/* <div className='items' onClick={() => history.push("/restuarants")}><h2>Dricks</h2> <img src={a} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Appetizers</h2> <img src={b} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Sandwich</h2> <img src={c} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Pizza</h2> <img src={d} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Fast Food</h2> <img src={e} alt='aa' width="200px" height="160px" /></div>


 */}

<div class="card1 first">
          <div class="front1">
            <img src="https://c0.wallpaperflare.com/preview/622/696/882/beef-bread-buns-burger.jpg" width={400} />
            {/* <img src="img.jpg" alt=""> */}
          </div>
          <div class="back1">
            <div class="back1-content first">
              <h2>Fast food</h2>
              <span>Youtube Channel</span>
              <div class="sm">
                <div className="uploaded">
                  {/* <Link to="/Areobic">
                    <button>View</button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card11 middle">
                    <div class="front11">
                        <img src="https://c1.wallpaperflare.com/preview/32/389/309/food-picnic-shish-kebab-meat.jpg"width={400}   />

                    </div>
                    <div class="back11">
                        <div class="back11-content middle">
                            <h2>Bar BQ items</h2>
                            <span>Youtube Channel</span>
                            <div class="sm">
                                <div className="uploaded">
                                <Link to="/Stretching">
                                        <button>View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card3 third">
                    <div class="front3">
                        <img src="https://c0.wallpaperflare.com/preview/522/409/283/fish-sea-bream-eat-food.jpg" width={400} />
                    </div>
                    <div class="back3">
                        <div class="back3-content third">
                            <h2>Sea foods</h2>
                            <span>Youtube Channel</span>
                            <div class="sm">
                                <div className="uploaded">
                                    <Link to="/Stretching">
                                        <button>View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


      <div className='POPULARCUISINES'>

        {/* <div className='items' onClick={() => history.push("/restuarants")}><h2>Salads</h2> <img img src={f} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Dessert</h2> <img img src={g} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>BBQ</h2> <img img src={h} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Pakistani</h2> <img img src={i} alt='aa' width="200px" height="160px" /></div>
        <div className='items' onClick={() => history.push("/restuarants")}><h2>Italian</h2> <img img src={j} alt='aa' width="200px" height="160px" /></div> */}



      </div>

    </div> <hr></hr>

    <div className='app'>
      <h1>Schedule Your Order</h1>
      <h3><Link to="/login">Log in</Link> to get started</h3>
    </div><hr></hr>
    <div className='app'>
      <div className='app2'>

        <img src={image3} width="400px" height="300px" alt='img' />
        {/* <hr style={({ width: '0px', height:"100%", marginLeft:"100px", marginRight:'100px'})}/> */}
        <div style={({ width: '300px', height: "10%", marginLeft: "100px", marginRight: '100px' })}><h3>Order Online</h3>
          <p>from hundreds of restaurant in your city</p></div>
      </div>
    </div>
  </>)
}

export default Index