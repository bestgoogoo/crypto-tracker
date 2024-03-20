import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import ApexChart from "react-apexcharts";

import { fetchCoinHistory } from "../api";
import { RouteState } from "./Coin";

interface IHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

function Chart() {
  const { state } = useLocation() as RouteState;
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv", state.id],
    queryFn: () => fetchCoinHistory(state.id),
  });
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type={"candlestick"}
          series={[
            {
              data: data?.map((price) => [
                new Date(price.time_open * 1000).getTime(), // 날짜
                Number(price.open).toFixed(2), // 시작가
                Number(price.high).toFixed(2), // 최고가
                Number(price.low).toFixed(2), // 최저가
                Number(price.close).toFixed(2), // 종가
              ]) as [],
            },
          ]}
          options={{
            plotOptions: {
              candlestick: {
                wick: {
                  useFillColor: true,
                },
              },
            },
            theme: {
              mode: "dark",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
