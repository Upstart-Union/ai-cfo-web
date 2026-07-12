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

import { TrendingUp } from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

export default function ProfitAreaChart() {
  const forecast = useDashboardStore(
    (state) => state.forecast
  );

  if (!forecast) {
    return (
      <div className="flex h-64 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-500 shadow-sm">
        No forecast available.
      </div>
    );
  }

  const data = forecast.months.map((month, index) => ({
    month,
    profit: forecast.profit[index],
  }));

  const latestProfit =
    forecast.profit[forecast.profit.length - 1];

  const previousProfit =
    forecast.profit[forecast.profit.length - 2] ??
    latestProfit;

  const growth =
    previousProfit === 0
      ? 0
      : (
          ((latestProfit - previousProfit) /
            previousProfit) *
          100
        ).toFixed(1);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            AI Profit Forecast
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            AI-generated 6-month profit projection based on
            your uploaded financial report.
          </p>

        </div>

        <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          AI Forecast
        </div>

      </div>

      <div className="mb-6 flex items-center justify-between rounded-2xl bg-slate-50 p-5">

        <div>

          <p className="text-sm text-slate-500">
            Projected Final Profit
          </p>

          <h3 className="mt-1 text-4xl font-bold text-slate-900">
            ₱{latestProfit.toLocaleString()}
          </h3>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

          <TrendingUp size={18} />

          +{growth}%

        </div>

      </div>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="profitGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22c55e"
                  stopOpacity={0.22}
                />

                <stop
                  offset="95%"
                  stopColor="#22c55e"
                  stopOpacity={0.02}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `₱${(value / 1000).toFixed(0)}k`
              }
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.12)",
              }}
              formatter={(value) => [
                `₱${Number(value).toLocaleString()}`,
                "Projected Profit",
              ]}
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#22c55e"
              strokeWidth={4}
              fill="url(#profitGradient)"
              dot={{
                r: 5,
                strokeWidth: 2,
                fill: "#22c55e",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}