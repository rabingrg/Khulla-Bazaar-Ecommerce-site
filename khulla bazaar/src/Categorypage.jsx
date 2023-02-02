import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent, Rating, Button } from "@mui/material";
import StoreCart from "./Store/Cartstore";

const Categorypage = () => {
  const { pcat } = useParams();
  const { addCart} = StoreCart();

  const getDataByCategory = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${pcat}`
    );
    return response.json();
    // console.log(response)
  };

  const { data, status } = useQuery(pcat, getDataByCategory);
  // console.log(data)

  if (status === "loading") {
    return <div>Lyaaaammmma lyamma.......</div>;
  }

  if (status === "error") {
    return <div>Errorr pageee</div>;
  }

  return (
    <>
      <Grid container spacing={4}>
        {data?.map((a) => {
          return (
            <>
              <Grid item xs={4} key={a.id}>
                <Card
                  style={{
                    margin: "20px",
                    height: "100%",
                    boxShadow: "0 0 20px 2px lightgray",
                    border: "3px solid lightgray",
                  }}
                >
                  <CardContent>
                    <div className="cardPage">
                      {/* <p>{a.title}</p> */}
                      <img
                        src={a.image}
                        style={{
                          objectFit: "contain",
                          height: "200px",
                          width: "260px",
                        }}
                      />
                      <div style={{ height: "50px", overflow: "hidden" }}>
                        <h1>{a.title}</h1>
                      </div>

                      <h3
                        style={{
                          color: "crimson",
                          fontFamily: "Manrope",
                          //   textAlign: "left",
                        }}
                      >
                        $ {a.price}
                      </h3>
                      <br />
                      <div style={{ height: "150px", margin: "0 7%",overflow:'hidden'  }}>
                        <p style={{ fontFamily: "Overlock"}}>
                          {a.description}
                        </p>
                        <br /><br/>
                      </div>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",width:'85%'
                        }}
                      >
                        <Rating size="small" defaultValue={a.rating.rate} />
                        <Button variant="contained" onClick={()=>{addCart(a)}}>Add To Cart</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Categorypage;
