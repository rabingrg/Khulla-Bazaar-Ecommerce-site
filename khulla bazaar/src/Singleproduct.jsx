import React from "react";
import { Button, Rating } from "@mui/material";
// import Navigation from "./Navigation";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import StoreCart from "./Store/Cartstore";
import { RotatingLines } from "react-loader-spinner";

const SingleProduct = () => {
  const { addCart } = StoreCart();

  const { pid } = useParams();

  const singleProductDetail = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products/${pid}`);
    return resp.json();
  };

  const { data, status } = useQuery(pid, singleProductDetail);

  if (status === "loading") {
    return (
      <>
        <div className="loaderBox">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="300"
            visible={true}
          />
        </div>
      </>
    );
  }

  if (status === "error") {
    return <div>Errrrrrrrrrrrr....404</div>;
  }
  console.log(data);

  return (
    <>
      <div className="relative top-24">
        <div className="h-4/5 w-[90%] m-auto mt-[1%] flex flex-row p-3">
          <div className="m-[3%] h-1/2 w-1/2 flex flex-row justify-center">
            <img src={data?.image} />
          </div>
          <div className="m-[3%] h-[70%] w-1/2 flex-col bg-[lightgray] rounded-xl p-[3%]">
            <h1 className="font-manrope text-4xl font-bold ">{data?.title}</h1>
            <br />
            <div>
              <h4 className="capitalize font-oswald text-xl text-blue-900">{data.category}</h4>
              <br />
            </div>
            <h3 className="text-red-600 text-3xl font-bold">$ {data?.price}</h3>
            <br />
            <p>{data?.description}</p>
            <br />
            <div className="flex justify-between">
              <Rating
                name="size-small"
                defaultValue={data?.rating.rate}
                size="small"
              />
              <Button
                variant="contained"
                onClick={() => {
                  addCart(data);
                }}
              >
                Add To Cart
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
