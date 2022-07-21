import React from 'react'
import '../css/About.css'
import Navbar from '../components/navbar'
// import Carousel from "react-elastic-carousel";
// import MasonryImageList from "../components/Foodimg.js";

function Aboutus() {
  return (
    <div className='about_main'>
      <Navbar/>
      <div className='submain1 box'>
        <div className='main_content'>
          <h1>ClockiFood</h1>
          <p>About us Formed in the food-loving business hub of Karachi, foodpanda offers city-dwellers the most convenient way to order high quality meals. Our goal is simple: To become the world’s fastest, most innovative business in the good food sector</p>
        </div>
      </div>
      <div className='submain2'>
        <div className='main2_left'>
          <h2>write here with this color</h2>
        </div>
        <div className='main2_right'>
        <p>write here with this color</p>
        </div>
      </div>
      <div className='submain3'>
        <div className='clients'>
          {/* <Carousel breakPoints={breakPoints} justify-content='center' align-items='center' color='#176cbb'>

            <div className="dr-1">
              <div >
                <img className="dr-inner-img" width="100%" src="http://themeatelier.net/site-templates/clinica/img/doctors/detail-doctor.jpg"
                // src={data.imgurl}
                />
              </div>
              <div className="dr-inner-content">
                <p>client name

                </p>
              </div>
            </div>


          </Carousel> */}
        </div>
      </div>
      <div className='submain4'>
      {/* <MasonryImageList /> */}
      </div>
      <div className='submain5'></div>
    </div>
  )


}


export default Aboutus