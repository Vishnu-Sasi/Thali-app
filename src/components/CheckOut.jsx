import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const checkedItems = useSelector((state) => state.checkout.checkedItems)
  
  const [warning, setWarning] = useState(false);
  const order = ()=>{
    alert('your thali order placed')
  }

  let totalBillAmount = checkedItems.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  useEffect(() => {
    if (checkedItems.length < 2) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [checkedItems.length]);

  return (
    <div style={{fontFamily:'fantasy',backgroundImage:"linear-gradient(lightseagreen,lightskyblue)"}} >
      {warning ? (
        <div style={{display:"flex",justifyContent:'center',alignItems:'center',width:'100%',height:'82vh'}}>
          <h2>
            Dear Customer, <br />
            <br />
            Please select minimum two items to see the order summary!{" "}
          </h2>
        </div>
      ) : (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'100%',height:'82vh',gap:'10px'}} >
          <h3> Order Summary </h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Item Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {checkedItems.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.itemImage}
                        alt={item.itemName}
                        width="60px"
                        height="60px"
                      />
                    </td>
                    <td>{item.itemName}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.unitPrice}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Total Bill Ammount</th>
                <th>{totalBillAmount}</th>
              </tr>
            </tfoot>
          </table>
         
         <button style={{padding:'10px',backgroundColor:'red',color:'white',borderRadius:'5px'}} onClick={order}>confirm</button>
         <p>your order will be delivered within half an hour after ordering</p>
        </div>
      )}
      
    </div>
  );
};

export default Checkout;
