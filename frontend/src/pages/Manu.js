import React from 'react'
import Navbar from '../components/navbar'

function Manu() {
    return (
        <div>
            <Navbar />

            <div style={({ display: "flex", width: '100%', backgroundColor: '#999', marginTop: '30px', height: '200px' })}>
               
            </div>


            <div style={({ display: 'flex', marginTop: '20px', marginRight: '20px', gap: '20px', marginLeft: '20px' })}>

                <div style={({ display: 'flex', width: '70%', height: '500px', flexDirection: "column" })}>
                    <div style={({ display: 'flex', gap: "30px" })}>
                        <h2>Manu</h2>
                        <h2>REVIEWS</h2>
                        <h2>INFO</h2>
                    </div>

                    <div style={({ display: 'flex', gap: "20px", marginTop: '30px', alignItems: 'center' })}>
                        <h3>Pizzy Deals</h3>
                        <h3>Combo Deals</h3>
                        <h3>Sandwich</h3>
                        <h3>Pasta and Lasagna</h3>
                        <h3>Pizza flavors</h3>
                        <h3>drink</h3>
                        <button>more</button>
                    </div>





                    <div style={({ width: "100%", height: "500px" })}>

                        <div style={({ width: "100%", backgroundColor: '#999', alignItems: 'center', display: 'flex', borderRadius: "5px 5px 0px 0px", height: "100px" })}>
                            <h1>PIZZAY DEALS</h1>
                        </div>

                        <div style={({ gap: "19px", width: "99.9%", height: "100px", boxShadow: '0 0 0px 1px' })}>

                            <h2>Combo 1</h2>
                            <h5>1 x Regular Pizza, Lasagna or Pasta and 1 x 1.5ltr Drink.</h5>
                            <div style={({ widht: '70%', display: 'flex', justifyContent: 'right', alignItems: "center", marginBottom: '10px', height: "20px", gap: '20px' })}>
                                <h3>Rs. 5000</h3>

                                <div style={({ width: "30px", marginRight: '10px', backgroundColor: "#000", height: '30px' })} > +icon</div >

                            </div>


                        </div>


                        <div style={({ gap: "19px", width: "99.9%", height: "100px", boxShadow: '0 0 0px 1px' })}>

                            <h2>Combo 1</h2>
                            <h5>1 x Regular Pizza, Lasagna or Pasta and 1 x 1.5ltr Drink.</h5>
                            <div style={({ widht: '70%', display: 'flex', justifyContent: 'right', alignItems: "center", marginBottom: '10px', height: "20px", gap: '20px' })}>
                                <h3>Rs. 5000</h3>

                                <div style={({ width: "30px", marginRight: '10px', backgroundColor: "#000", height: '30px' })} > +icon</div >

                            </div>


                        </div>

                        <div style={({ gap: "19px", width: "99.9%", height: "100px", boxShadow: '0 0 0px 1px' })}>

                            <h2>Combo 1</h2>
                            <h5>1 x Regular Pizza, Lasagna or Pasta and 1 x 1.5ltr Drink.</h5>
                            <div style={({ widht: '70%', display: 'flex', justifyContent: 'right', alignItems: "center", marginBottom: '10px', height: "20px", gap: '20px' })}>
                                <h3>Rs. 5000</h3>

                                <div style={({ width: "30px", marginRight: '10px', backgroundColor: "#000", height: '30px' })} > +icon</div >

                            </div>


                        </div>


                    </div>






                </div>




                <div style={({ display: 'flex', flexDirection: 'column', width: "30%", gap: '30px' })}>




                    <div style={({ display: 'flex', height: 'auto', boxShadow: '0 0 0 1px', flexDirection: 'column', width: "100%" })}>
                        <h1> Your Order</h1>

                        <hr style={({ width: '100%' })}></hr>
                        <div style={({ display: 'flex' })}>
                            <div style={({ width: '33.33%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'0px', height: "auto" })}>
                                <h3>Order type</h3>
                                <h2 style={({marginTop:'-20px'})}>Delivery</h2>
                                <h3>Change</h3>
                            </div>
                            <div style={({ width: '33.33%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'0px', height: "auto" })}>
                                <h3>Deliver to</h3>
                                <h2 style={({marginTop:'-20px'})}>karachi</h2>
                                <h3>Change</h3>
                            </div>
                            <div style={({ width: '33.33%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'0px', height: "auto" })}>
                                <h3>Delivery time</h3>
                                <h2 style={({marginTop:'-20px'})}>Today, now</h2>
                                <h3>Change</h3>
                            </div>
                        </div>


                        <div style={({ display: 'flex' })}>
                            <div style={({ width: '70%', height: "auto" })}>
                                <h2>2 xCombo 1</h2>
                            </div>
                            <div style={({ display: 'flex', justifyContent: 'right', width: '30%', height: "auto" })}>
                                <h2>Rs 5000/-</h2>
                            </div>
                        </div>
                        <h5>Deals Items</h5>


                        <div style={({ marginLeft: '20px', display: 'flex' })}>

                            <div style={({ width: '70%', height: "auto" })}>
                                <h5>2 xCombo 1</h5>
                            </div>
                            <div style={({ display: 'flex', justifyContent: 'right', width: '30%', height: "auto" })}>
                                <h5>free</h5>
                            </div>

                        </div>

                        <div style={({ marginLeft: '20px', display: 'flex' })}>

                            <div style={({ width: '70%', height: "auto" })}>
                                <h5>2 xCombo 1</h5>
                            </div>
                            <div style={({ display: 'flex', justifyContent: 'right', width: '30%', height: "auto" })}>
                                <h5>free</h5>
                            </div>

                        </div>

                        <div style={({ marginLeft: '20px', display: 'flex' })}>

                            <div style={({ width: '70%', height: "auto" })}>
                                <h5>2 xCombo 1</h5>
                            </div>
                            <div style={({ display: 'flex', justifyContent: 'right', width: '30%', height: "auto" })}>
                                <h5>free</h5>
                            </div>

                        </div>

                        <div style={({ marginLeft: '20px', display: 'flex' })}>

                            <div style={({ width: '70%', height: "auto" })}>
                                <h5>2 xCombo 1</h5>
                            </div>
                            <div style={({ display: 'flex', justifyContent: 'right', width: '30%', height: "auto" })}>
                                <h5>free</h5>
                            </div>

                        </div>
                        <div style={({ marginLeft: '20px', display: 'flex' })}>

                            <div style={({ width: '70%', height: "auto" })}>
                                <h5>Edit Extras</h5>
                            </div>


                        </div>
                        <div style={({ display: 'flex', gap: '10px', marginLeft: '5px' })}>  <a> <h5>Repeat</h5> </a><h5>Remove</h5></div>


                        <div style={({ display: 'flex', width: '100%', height: 'auto', backgroundColor: '#999' })}>
                            <div>  <h3>Item cost  Rs:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    2,198/-</h3>
                                <h3>Delivery Fee Rs:    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      198/-</h3>
                                ------------------------
                                <h1>Order Total Rs: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5000/-</h1>
                                <h5>All prices are inclusive of 13% GST</h5>
                            </div>


                        </div>
                    </div>
                    <div style={({ justifyTracks: 'center', alignItems: 'center', display: 'flex', height: '50px', backgroundColor: "#999", boxShadow: '0 0 0 1px', flexDirection: 'column', width: "100%" })}>
                        <h1>Place Order</h1>
                    </div>
                </div>


            </div>






        </div>
    )
}

export default Manu