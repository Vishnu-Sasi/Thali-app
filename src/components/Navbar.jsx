import React from 'react';
import { Link } from 'react-router-dom';
import  Logo from '../images/kitchen.png'
import "./Navbar.css"
const Navbar = () => {

    return (

        <nav  className='nav'  >
            <div className='main-div'> 
            <img src= {Logo} alt="logo" height={"100px"}  />

                <Link className='thali' to={"/"} ><h1>Thali House</h1></Link>
                {/* <div style={{}}> */}
                    <Link  to='/' className='menu'> <h1 className='items' >Home</h1></Link>
                    <Link to='/customthali' className='menu'  ><h1  className='items'>Create Your Thali</h1></Link>
                    <Link  to='/checkout' className='menu' ><h1 className='items'>Checkout</h1> </Link>

                {/* </div> */}

            </div>

        </nav>

    );

};

export default Navbar;