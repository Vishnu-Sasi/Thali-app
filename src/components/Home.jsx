import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImage from '../images/thali.jpg'
import "./Home.css"
const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/customthali');
    };

    return (

        <div className='main'  >

            <h1 >
                Dear Customer,welcome to Thali House!
            </h1>

            <h4>
                Hungry?
                Order your delicious Thali Now !
            </h4>

              <div >
              <img src={HomeImage}alt='Thali' style={{width:'500px',height:'300px',objectFit:'cover',borderRadius:'50px'}} />
              </div>

            <div style={{textAlign:"center"}}>
            <button className='btn' onClick={handleNavigate}> Order Thali </button>
            
            </div>
            <h5>Have A Nice Day</h5>
        </div>

    );

};


export default Home;