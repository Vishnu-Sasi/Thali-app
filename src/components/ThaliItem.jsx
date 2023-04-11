import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../components/store/checkoutSlice';
import "./ThaliItem.css"

const ThaliItem = ({ item }) => {

    const [quantity, setQuantity] = useState(1);

    const [isItemAdded, setIsItemAdded] = useState(false);

    const dispatch = useDispatch();


    const handleAddItem = () => {
        dispatch(addItem({ item, quantity }));
        setIsItemAdded(true);
    }


    const handleRemoveItem = () => {
        dispatch(removeItem(item));
        setIsItemAdded(false);
        setQuantity(1);
    }


    const handleSelect = (event) => {
        setQuantity(Number(event.target.value));
    }


    return (

        <div className='main'  >

            <div >
                <p >{item.id}</p>
            </div>
            <img src={item.itemImage} alt="" height={"150px"} />

            <div >
                <p >{item.itemName}</p>
            </div>

            <div  >
                <select
                    
                    onChange={handleSelect}
                    value={quantity}
                >

                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>

                </select>
            </div>

            <div >
                {
                    isItemAdded ?

                        <button className='remove' onClick={handleRemoveItem}>
                            Remove 
                        </button>

                        :

                        <button  className='add'   onClick={handleAddItem}>
                            Add Item
                        </button>

                }
            </div>

        </div>

    );

};


export default ThaliItem;