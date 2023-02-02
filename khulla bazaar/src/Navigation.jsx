import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StoreCart from "./Store/Cartstore";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const Navigate = useNavigate();

    const {cart} = StoreCart();

  return (
    <>
      <div className="fixed flex justify-between bg-[#95a5a6] items-center h-[15vh] w-full top-0 z-10" >
        <span>
          <Link to="/">
            <img src="img/kblogo.png" className="w-28 h-28 cursor-pointer" />
          </Link>
        </span>
        
        <Link to="/" className="ml-[-100px]  font-dancing text-5xl text-[#232f3e] cursor-pointer"
          // style={{
          //   marginLeft: "-120px",
          //   fontFamily: "Dancing Script",
          //   fontSize: "45px",
          //   color: "",
          //   textShadow: "0 1px 10px white",
          //   textDecoration: "none",
          //   cursor: "pointer",
          // }}
        >
          Khulla Bazaar
        </Link>

        <div className="w-1/3 flex flex-row items-center">
          <input type="text" className="w-full h-12 outline-none border-none rounded-l-full py-0 px-3 text-lg text-[#ef5777]" placeholder="Search"
            // style={{
            //   //   marginLeft: "50px",
            //   width: "100%",
            //   height: "50px",
            //   borderRadius: "25px 0 0 25px",
            //   border: "none",
            //   outlineStyle: "none",
            //   padding: "0 10px",
            //   fontSize: "20px",
            //   color: "#ef5777",
            // }}
            
          ></input>
          <button className="h-12 w-16 border-none cursor-pointer rounded-r-full bg-[#febd69]">
            <HiOutlineSearch className="relative left-3 top-0.5" size="30px" color="white"/>
          </button>
        </div>
        <div>
          <select className="font-oswald text-lg border-none outline-none cursor-pointer h-10 ">
            <option >All Categories</option>
            <option onClick={()=>{Navigate(`/product/category/men's%20clothing`)}}>Men's Clothing</option>
            <option value="womensclothing">Women's Clothing</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
          </select>
        </div>

        <div className="w-[12%] mr-10 flex flex-row justify-center items-center" > 
            <div className="h-full w-4/5 flex mr-[5%]">                
                <Button className="border-none rounded-full" onClick={()=>{Navigate('/cart')}}>
                    <AiOutlineShoppingCart size="70px"  className="cursor-pointer "  />
                </Button>
                <div className="h-1/5 w-[30%] ml-[-10px] z-10">
                    <p className="text-2xl">{cart}</p>
                </div>
            </div>

            <div>
                <Button >
                    <FaRegUser size="55px" className="cursor-pointer" color="#B53471" />
                </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
