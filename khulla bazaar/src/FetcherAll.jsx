import React from "react";
import {  Rating } from "@mui/material";
import {  Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import StoreCart from "./Store/Cartstore";
import { RotatingLines } from "react-loader-spinner";

const FetcherAll = () => {
  const { addCart } = StoreCart();

  const Navigate = useNavigate();
  const gotDataApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  const { data, status } = useQuery("forCaching", gotDataApi);
  // console.log(data)
  if (status === "loading") {
    return (
      <>
        <div>
          <div className="h-50 w-75 my-[25vh] mx-[50vw] flex-col align-middle">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
            <h3 className="font-kalam">Lyaammaa lyamma...</h3>
          </div>
        </div>
      </>
    );
  }

  if (status === "error") {
    return <div>Erorr..</div>;
  }

  return (
    <>
      <div className="relative grid grid-cols-3 gap-10 mt-4 mx-[2%] h-full top-24">
        {data
          ? data.map((e, index) => {
              return (
                <>
                  <div className="shadow-xl hover:scale-[1.01] rounded-3xl p-2"
                    key={index}>
                    <div className="my-0 mx-[5%] flex justify-center object-contain">
                      <img src={e.image} className="h-60 w-55" />
                    </div><br/>
                    <div className="h-[14%] mx-[5%] my-0 ">
                      <h1 className="cursor-pointer line-clamp-2 font-aro text-3xl text-gray-800"
                        onClick={() => {
                          Navigate(`/product/${e.id}`);
                        }}>{e.title}</h1>

                    </div>
                    <h3 className="text-red-600 text-3xl font-manrope text-left my-0 mx-[5%]">
                      $ {e.price}
                    </h3><br/>
                    <div className="mx-[5%]">
                      <h4
                        className="capitalize cursor-pointer font-kalam text-[#007185]"
                        onClick={() => {
                          Navigate(`/product/category/${e.category}`);
                        }}
                      >
                        {e.category}
                      </h4>
                    </div><br/>

                    <div className="h-30 w-100 mx-[5%] my-0 line-clamp-5">
                      <p className="font-overlock ">{e.description}</p>
                      <br />
                      <br />
                    </div>
                    <br />
                    <div className="flex justify-between align-middle my-0 mx-[5%]">
                      <Rating
                        name="size-small"
                        defaultValue={e.rating.rate}
                        size="small"
                      />
                      <Button
                        variant="contained"
                        onClick={() => {
                          addCart(e);
                        }}
                      >
                        Add To Cart
                      </Button>
                    </div><br/><br/>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};
export default FetcherAll;

// const Nextcomapi = () => {
//   const [data, setPdtdata] = useState([]);

//   const getData = async () => {
//     const setHeaders = {
//       headers: {
//         Accept: "application/json",
//       },
//     };

//     const response = await fetch(
//       "https://fakestoreapi.com/products",
//       setHeaders
//     );
//     const data = await response.json();
//     console.log(data);
//     setPdtdata(data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <Grid container spacing={9}>
//         {pdtdata
//           ? pdtdata.map((e) => {
//               return (
//                 <Grid item xs={4}>
//                   <Card>
//                     <CardContent className="cardContent" variant='contained'>
//                       <>
//                         <div className="cards">
//                           <img
//                             src={e.image}
//                             style={{ height: "200px", width: "160px" }}
//                           />
//                           <div className="cardTitle">
//                             <Link to='product/:productId' productId={e.id}>{e.title}</Link>

//                           </div>
//                           <h3
//                             style={{
//                               color: "crimson",
//                               fontFamily: "Manrope",
//                               textAlign: "left",
//                             }}
//                           >
//                             $ {e.price}
//                           </h3><br/>
//                           <div className="cardDescription">
//                             <p style={{ fontFamily: "Overlock" }}>

//                               {e.description}
//                             </p>
//                             <br />
//                             <br />
//                           </div><br/>
//                           <div>
//                           <Button variant='contained'>Add To Cart</Button>
//                           </div>
//                         </div>
//                       </>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               );
//             })
//           : null}
//       </Grid>
//     </div>
//   );
// };

// export default Nextcomapi;
