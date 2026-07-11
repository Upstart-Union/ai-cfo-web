"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useDashboardStore } from "@/stores/dashboard";

export default function RevenueChart() {
  const forecast = useDashboardStore(
    (state) => state.forecast
  );

  if (!forecast) {
    return (
      <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-slate-500">
        Upload a financial report to view revenue forecast.
      </div>
    );
  }

  const data = forecast.months.map((month, index) => ({
    month,
    revenue: forecast.revenue[index],
  }));

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
