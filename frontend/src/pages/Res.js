import React from 'react'
import Navbar from '../components/navbar'
import { Checkbox } from 'antd';
import "../css/Ress.css"

function Ress() {
    return (
        <div>

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





                <div style={({ display: 'flex', height: 'auto', flexDirection: 'column', width: '75%', marginLeft: "20px" })} >
                    <h1>9 Restaurants Found</h1>
                    <form className='searchbar'><input required="true" placeholder='search by your Area' className='searchinput' /><button className='searbtn'>Search</button> </form>
                    
                    
                    <div  style={({width: '100%', backgroundColor: '#000', height: '80px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>
kpujpo
                    </div>



                    <div style={({ width: '100%', gridTemplateColumns: "auto auto auto", height: 'auto', display: 'inline-grid',justifyContent:'center', gap: '30px', marginTop: "30px" })}>

                      
                      
                      
                      
                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '50px', flexDirection: "column", marginTop: "30px" })}>

                        </div>

                        
                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>

                        </div>

                        
                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>

                        </div>

                        
                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>

                        </div>
                        
                        <div style={({ width: '280px', backgroundColor: '#000', height: '300px', display: 'flex', gap: '10px', flexDirection: "column", marginTop: "30px" })}>

                        </div>

                   


                        

                    </div>

                </div>

            </div>




        </div>
    )
}

export default Ress