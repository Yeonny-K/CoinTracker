import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 180000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => 
              {
                const date = new Date(price.time_open * 1000);
                const month = (date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0");
                const day = date.getDate().toString().padStart(2, "0");
                return {
                  x: `${month}-${day}`,
                  y: [price.open, price.high, price.low, price.close],
                };
              }) ?? [],
            },
          ]}
          options={{
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "category",
              labels: {
                formatter: (value) => {
                  return value;
                },
              },
              
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;