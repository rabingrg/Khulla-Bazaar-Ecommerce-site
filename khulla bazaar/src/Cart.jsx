import React from "react";
import StoreCart from "./Store/Cartstore";
import {  Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, cartPrice, delCart, emptyCart } = StoreCart();
  // console.log(cartItems);
  // console.log(cartPrice);
  const Navigate = useNavigate();

  return (
    <>
    <div className="relative top-28">
      <div className="flex justify-between items-center mt-[0.5%] ml-[6%] w-3/5">
        <Button onClick={() => Navigate(-1)}>Go Back</Button>
        <h1 className="font-oswald text-5xl text-[#fd9915] text-shadow shadow-[gray]"
          // style={{
          //   fontFamily: "Oswald",
          //   fontSize: "50px",
          //   color: "",
          //   textShadow: "1px 3px 6px gray",
          // }}
        >
          My Cart
        </h1>
        <div className="mt-[2%] w-1/3">
          {cartItems.length == 0 ? (
            <Button size="large" variant="contained" disabled>
              Delete All
            </Button>
          ) : (
            <Button onClick={() => emptyCart()} size="large" variant="contained" color="error">
              Delete All
            </Button>
          )}
        </div>
      </div>
      <div className="w-full h-full flex mt-[1.5%]">
        <div className="grid grid-cols-1 w-[70%] h-full">
            {cartItems.map((ar, index) => {
              return (
                <> 
                  <div className="mx-[5%] p-[2%] rounded-2xl">
                          <p>{index + 1}.</p>
                          <div className="flex">
                            <div>
                              <img src={ar.image} className='object-contain h-60 w-72'/>
                            </div>
                            <div className="w-full mx-[3%] bg-slate-200 p-[2%] rounded-lg">
                              <h1>{ar.title}</h1>
                              <br />
                              <div className="flex justify-between">
                                <h2>$ {ar.price}</h2>
                                <Button variant="contained" onClick={() => delCart(ar, index)}>
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                          <br />
                          <br />
                          {(cartItems.length)? <hr /> : null}
                        </div>
                </>
              );
            })}
         
        </div>
        <div className="h-full w-1/3 p-[2%] bg-slate-200 rounded-2xl mr-5">
          <h1 className="font-oswald text-4xl text-shadow shadow-slate-500 ">Total: </h1>
          <hr /> <br/>
          <span>
            <h3 className="text-red-600 text-7xl font-oswald text-shadow shadow-slate-500"
              // style={{
              //   color: "crimson",
              //   fontSize: "70px",
              //   fontFamily: "Oswald",
              //   textShadow: "1px 3px 4px gray",
              // }}
            >
              $ {cartPrice}
            </h3>
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
