"use client";

import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useDashboardStore } from "@/stores/dashboard";

export default function ProfitAreaChart() {

  const forecast = useDashboardStore(
    (s) => s.forecast
  );

  if (!forecast)
    return (
      <div className="flex h-80 items-center justify-center text-slate-500">
        No forecast available.
      </div>
    );

  const data = forecast.months.map((month, i) => ({
    month,
    profit: forecast.profit[i],
  }));

  return (
    <>
      <h3 className="mb-5 text-xl font-semibold">
        Profit Forecast
      </h3>

      <div className="h-80">

        <ResponsiveContainer>

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="month"/>

            <YAxis/>

            <Tooltip/>

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#22c55e"
              fill="#22c55e33"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>
    </>
  );
}
