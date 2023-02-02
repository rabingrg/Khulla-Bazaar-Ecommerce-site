import React from "react";
// import Homepage from "./Homepage";
import FetcherAll from "./FetcherAll";
import Singleproduct from "./Singleproduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Cart from "./Cart";
import Lau from "./lau";
import Categorypage from "./Categorypage";
// import Mens from "./Categories/Mens";
// import Womens from "./Categories/Womens";

const queryClient = new QueryClient();

const App = () => {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Lau />} >
                <Route index element={<FetcherAll />} />
                <Route path="product/:pid" element={<Singleproduct />} />
                <Route path="cart" element={<Cart/>}/>
                <Route path="product/category/:pcat" element={<Categorypage/>} />
                
              </Route>
            </Routes>
          </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
