import React from "react";
import "./Chart.css"
import { Chart } from "react-google-charts";

const generateStaticData = () => {
  const staticData = [["Time", "Low", "Open", "Close", "High"]];
  let currentPrice = 2900;
  for (let i = 0; i < 20; i++) {
    const open = currentPrice;
    const close = open + Math.random() * 100 - 50;
    const high = Math.max(open, close) + Math.random() * 50;
    const low = Math.min(open, close) - Math.random() * 50;
    staticData.push([
      `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"} ${
        i < 12 ? "AM" : "PM"
      }`,
      low,
      open,
      close,
      high,
    ]);
    currentPrice = close;
  }
  return staticData;
};

const StaticCandlestickChart = () => {
  const staticData = generateStaticData();

  return (
    <div className="chart-container">
      <div className="stock-info">
        <h2>ACME Inc.</h2>
        <div className="stock-details">
          <p className="last-price">$2,940.25</p>
          <p className="price-trend">Price Trend - 1YR</p>
        </div>
      </div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={staticData}
        options={{
          legend: "none",
          backgroundColor: "#2a282c",
          chartArea: { width: "80%", height: "70%" },
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#e53935" },
            risingColor: { strokeWidth: 0, fill: "#43a047" },
          },
          vAxis: {
            gridlines: { color: "#e0e0e0" },
            baselineColor: "#bdbdbd",
            textStyle: { color: "#dbdbdb" },
          },
          hAxis: {
            textStyle: { color: "#dbdbdb" },
          },
        }}
      />
      <div className="stock-stats">
        <div className="stat-item">
          <p className="stat-label">1M Return</p>
          <p className="stat-value">2.10%</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">1Y Return</p>
          <p className="stat-value">37.70%</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">52W High</p>
          <p className="stat-value">$3,024.90</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">52W Low</p>
          <p className="stat-value">$2,117.22</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">PE Ratio</p>
          <p className="stat-value">29.82</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">β</p>
          <p className="stat-value">1.01</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Div. Yield</p>
          <p className="stat-value">0.31%</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="chart-row">
        <StaticCandlestickChart />
      </div>
    </div>
  );
}

export default App;



