import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Login from "./components/Login";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  const [flag, setFlag] = useState(true)



  return (

    //if flag is true, show the dashboard, else show the login page
    flag ? <Login setFlag={setFlag} /> :
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard setFlag={setFlag} />:
      </StockContext.Provider>
    </ThemeContext.Provider >


  );
}

export default App;
