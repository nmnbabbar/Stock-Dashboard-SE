import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";
import Login from "./Login";


const Dashboard = ({setFlag}) => {
  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  const [isWatching, setIsWatching] = useState({});
  

  useEffect(() => {
    console.log(stockSymbol); //hash
    console.log(stockDetails); 
    console.log(quote);
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
        
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  const ToggleWatch = () => {
    //if the current stockSymbol is present inside the hashmap then add it or remove it from the hashmap
    if(isWatching[stockSymbol]){
      setIsWatching({...isWatching, [stockSymbol]: false});
    } else {
      setIsWatching({...isWatching, [stockSymbol]: true});
    }



  }
const handleSignout = () => {
  setFlag(true);
 }

  return (

    <>
   
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >


      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
      <button  className="bg-blue-500   text-white px-4 py-2 rounded-md mx-auto" onClick={handleSignout}>Sign Out</button>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
    <button onClick={ToggleWatch}> Toggle Watchlist </button>
    {/* dynamically show the user if the stock is present in the hashmap or not */}
    {isWatching[stockSymbol] ? <p>Stock is being watched {stockSymbol}</p> : <p>Stock is not being watched</p>}
    </>
  );
};

export default Dashboard;
