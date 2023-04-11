import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCheckedItems } from './store/checkoutSlice';
import ThaliItem from './ThaliItem';


const Thali = () => {

    const dispatch = useDispatch();
    const initialData = useSelector((state) => state.checkout.Data);
    const checkedItems = useSelector((state) => state.checkout.checkedItems);
    const navigate = useNavigate();
    const [warning, setWarning] = useState(false);


    useEffect(() => {
        dispatch(clearCheckedItems());
    }, [dispatch]);
    const handleCheckout = () => {

        if (checkedItems.length < 2) {
            setWarning(true);
        }
        else {
            setWarning(false);
            navigate('/checkout');
        }
    };

    return (

        <div style={{backgroundImage:'linear-gradient(lightseagreen,lightskyblue)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
            <h3 > Dear Customer, add items to your thali!</h3>
            <div style={{padding:"10px",display:"flex", flexWrap:"wrap"}}>
           
                {    
                    checkedItems.map((item, index) => {
                        return ( <>
                            <h2 style={{color:"green", padding:"15px"}} key={index}>{item.itemName}</h2>
                             <img
                                key={index}
                                src={item.itemImage}
                                alt={item.itemName}
                                width='180px'
                                height='180px'
                            />
                            </>
                        );
                    })
                }
            </div>
            <div  style={{display:"flex"}}>
                {initialData.map((item, index) =>
                    <ThaliItem key={index} item={item} />
                )}
            </div>
            {
                warning ?
                    <div style={{color:"red"}}>
                        <h4 className='m-0 text-center'>Please select minimum two items before checkout</h4>
                    </div>
                    :
                    null
            }
            <button style={{backgroundColor:"blue", color:"white", width:"150px", height:"40px",borderRadius:"8px", fontWeight:"800", marginTop:"20px"}}
                onClick={handleCheckout}>Checkout</button>

        </div>

    );

};


export default Thali;