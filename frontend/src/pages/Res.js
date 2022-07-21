import React from 'react'
import Navbar from '../components/navbar'
import { Checkbox } from 'antd';
import "../css/Ress.css"
import { Link , useHistory  } from 'react-router-dom';

function Ress() {
    const history = useHistory();
    return (
        <div >

            <Navbar />


            <div style={({ width: "100%", height: '50px' })}></div>

            <div style={({ display: 'flex' })}>

                <div style={({ display: 'flex', height: '100vh', width: '20%', marginLeft: "20px", flexDirection: "column" })} >


                    <div style={({ display: 'flex', backgroundColor: '#999', height: '50px', width: '100%', borderRadius: '5px', marginBottom: "10px" })} >
                    </div>

                    <div style={({ display: 'flex', backgroundColor: '#999', height: '50px', width: '100%', borderRadius: '5px', marginBottom: "10px" })} >
                    </div>

                    <div style={({ display: 'flex', backgroundColor: '#999', height: '50px', width: '100%', borderRadius: '5px', marginBottom: "10px" })} >
                    </div>

                    <div style={({ display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>


                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>
                        <Checkbox>sdrfjcl</Checkbox>


                    </div>
                </div>





                <div style={({ display: 'flex', height: 'auto', flexDirection: 'column', width: '75%', marginLeft: "20px",marginBottom:'30px'})} >
                    <h1>9 Restaurants Found</h1>
                    <form className='searchbar' style={({ display: 'flex', width: '40%', marginLeft:"350px",marginTop:"10px",})}>
                        <input required="true" placeholder='search by your Area' className='searchinput' style={({  backgroundColor:'rgb(237, 172, 149)',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"})}/><button className='searbtn' style={({backgroundColor:"rgba(139, 133, 133, 0.884)"})}>Search</button> </form>


                    <div style={({ width: '100%', backgroundColor: 'rgb(237, 172, 149)', height: '50px', paddingLeft:'40%',paddingTop:'10px',display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>
                        Enter your area get more results
                    </div>



                    <div style={({ width: '100%', gridTemplateColumns: "auto auto auto", height: 'auto', display: 'inline-grid', justifyContent: 'center', gap: '30px', marginTop: "30px" })}>





                        <div onClick={() => history.push("/manu")} style={({  cursor: 'pointer', width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '50px', flexDirection: "column", marginTop: "30px" , boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"})}>
                        <img src='https://c1.wallpaperflare.com/preview/196/921/67/5970509e05f9a.jpg' height={300}/>
                        </div>


                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" , boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"})}>
                        <img src='https://c0.wallpaperflare.com/preview/706/1005/217/biriyani-chicken-cooked-cuisine.jpg' height={300}/>
                        </div>


                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" , boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"})}>
                        <img src='https://c0.wallpaperflare.com/preview/875/875/799/assorted-cook-foods.jpg' height={300}/>
                        </div>


                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" })}>
                        <img src='https://c1.wallpaperflare.com/preview/775/143/582/cute-sweet-tasty-delicious.jpg' height={300}/>
                        </div>

                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",marginTop: "30px" })}>
                        <img src='https://c1.wallpaperflare.com/preview/332/511/698/burger-food-bun-hamburger.jpg' height={300}/>
                        </div>






                    </div>

                </div>

            </div>




        </div>
    )
}

export default Ress