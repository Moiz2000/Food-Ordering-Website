import React, { useState } from 'react'
import '../css/navbar.css'
import { useHistory } from 'react-router-dom';
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';


function Navbar() {
    const [active, setactive] = useState(false)
    const history = useHistory();
    return (<>





        {active === true && <>
            <div className='popup'>
                <div style={({ width: '100%', display: 'flex', justifyContent: 'center' })}>
                    <h1>ClockiFood</h1>

                </div>

                <div><hr></hr>
                    <div style={({ display: 'flex', alignItems: 'center', marginLeft: '30px' })}>
                        <div className='navlink' onClick={() => history.push("/")}>
                            <div style={({ width: '30px', height: '30px', backgroundColor: '#000', marginRight: '10px' })}>
                            </div>
                            <h3>Home</h3>
                        </div>
                    </div>


                    <div style={({ display: 'flex', alignItems: 'center', marginLeft: '30px' })}>
                        <div className='navlink' onClick={() => history.push("/login")}>
                            <div style={({ width: '30px', height: '30px', backgroundColor: '#000', marginRight: '10px' })}>
                            </div>
                            <h3>Login as Custommer</h3>
                        </div>
                    </div>


                    <div style={({ display: 'flex', alignItems: 'center', marginLeft: '30px' })}>
                        <div className='navlink' onClick={() => history.push("/loginasrestaurant")}>
                            <div style={({ width: '30px', height: '30px', backgroundColor: '#000', marginRight: '10px' })}>
                            </div>
                            <h3>login as restaurant</h3>
                        </div>
                    </div>

                    <hr></hr>
                </div>

                <div>
                    <div style={({ display: 'flex', alignItems: 'center', marginLeft: '30px' })}>    <h2>ClockiFood</h2> </div>
                    <div className='navlink' onClick={() => history.push("/Registerrestuarant")}>     <div style={({ display: 'flex', marginTop: '-10px', alignItems: 'center', marginLeft: '30px' })}>
                        <h5>I am restaurant</h5> </div> </div>
                    <hr></hr>
                </div>
                <div style={({ display: 'flex', alignItems: 'center', marginLeft: '30px' })}>    <h2>Need help</h2> </div>
             
                <div className='navlink' onClick={() => history.push("/FAQs")}>  
                <div style={({ display: 'flex', marginTop: '-10px', alignItems: 'center', marginLeft: '30px' })}>
                    <h5>FAQs</h5> </div> </div>

                    <div className='navlink' onClick={() => history.push("/contactus")}>  
                <div style={({ display: 'flex', marginTop: '-10px', alignItems: 'center', marginLeft: '30px' })}>
                    <h5>Contact Us</h5> </div></div>



            </div>

            <div className='bg' onClick={() => setactive(false)}></div>

        </>}















        <div className='nav'>
            <div className='left'>
                <div className='menu' onClick={() => setactive(true)}> <div></div></div>
                <div className='logo' ><h1 style={({cursor: "pointer"})} onClick={() => history.push("/")}>ClockiFood(logo)</h1></div>
            </div>
            <div className='right'>
                <div className='rightside'>
                    <h5 onClick={() => history.push("/Registerrestuarant")}>I am restaurant</h5>
                    <h5 onClick={() => history.push("/aboutus")}>About Us</h5>
                    <h5 onClick={() => history.push("/login")}>log in</h5>
                    <div className='btn'>register</div>
                    <Icon  component={ShoppingCartOutlined}  className='cart'/>
                </div>

            </div></div>








    </>)
}

export default Navbar