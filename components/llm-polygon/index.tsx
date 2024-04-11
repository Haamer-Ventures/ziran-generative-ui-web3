import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

type ChartPoint = [number, number]; // Define the type for a data point in Highcharts

type StockData = {
  t: number; // timestamp
  c: number; // closing price
};

export default function High() {
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: "NVDA Stock Price",
    },
    rangeSelector: {
      enabled: true,
    },
    series: [
      {
        name: "NVDA",
        data: [] as ChartPoint[],
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    credits: {
      enabled: false,
    },
  });

  // Calculate 3 months back date from today
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  // Convert date to YYYY-MM-DD format
  const fromDate = threeMonthsAgo.toISOString().split("T")[0];
  const toDate = new Date().toISOString().split("T")[0]; // Today's date

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/polygon?symbol=NVDA&from=${fromDate}&to=${toDate}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        if (json.status === "OK" && Array.isArray(json.results)) {
          const chartData: ChartPoint[] = json.results.map(
            (item: StockData) => [item.t * 1000, item.c]
          );

          setChartOptions((prevOptions) => ({
            ...prevOptions,
            series: [{ ...prevOptions.series[0], data: chartData }],
          }));
        } else {
          console.error("Error fetching stock data:", json);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, [fromDate, toDate]); // Make sure useEffect reacts to changes in fromDate and toDate

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={chartOptions}
    />
  );
}
