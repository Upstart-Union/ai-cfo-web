"use client";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useDashboardStore } from "@/stores/dashboard";

import { Cell } from "recharts";
import { Lightbulb } from "lucide-react";

const COLORS = [
  "#2563EB", // Revenue
  "#F59E0B", // Expenses
  "#22C55E", // Profit
];

export default function RevenueChart() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  if (!dashboard) return null;

  const margin = dashboard.profit_margin;

  const insight =
    margin >= 20
      ? "Revenue significantly exceeds operating expenses, demonstrating strong profitability and effective financial management. Maintaining this performance provides excellent opportunities for reinvestment and long-term growth."
      : margin >= 10
      ? "The business is operating profitably with healthy financial performance. Continued cost discipline and steady revenue growth will strengthen future profitability."
      : "Profit margins remain relatively tight. Increasing revenue while optimizing operating expenses should be prioritized to improve overall financial performance.";

  const data = [
    {
      name: "Revenue",
      value: dashboard.revenue,
      color: "#2563EB",
    },
    {
      name: "Expenses",
      value: dashboard.expenses,
      color: "#F59E0B",
    },
    {
      name: "Net Profit",
      value: dashboard.profit,
      color: "#22C55E",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-6 flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Financial Comparison
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Live metrics extracted from the uploaded report.
          </p>

        </div>

        <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Live Financial Data
        </div>

      </div>

      <div className="h-[300px]">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid
                stroke="#E5E7EB"
                strokeDasharray="4 4"
                vertical={false}
            />

            <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
            />

            <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) =>
                    `$${(v / 1000).toFixed(0)}k`
                }
            />

            <Tooltip
              cursor={{
                fill: "rgba(37,99,235,.06)",
              }}
              contentStyle={{
                border: "none",
                borderRadius: 16,
                boxShadow:
                  "0 12px 30px rgba(0,0,0,.12)",
              }}
            />

            <Bar
              dataKey="value"
              shape={(props: any) => {
                const {
                  x,
                  y,
                  width,
                  height,
                  payload,
                } = props;

                return (
                  <path
                    d={`
                      M${x},${y + 12}
                      Q${x},${y} ${x + 12},${y}
                      H${x + width - 12}
                      Q${x + width},${y} ${x + width},${y + 12}
                      V${y + height}
                      H${x}
                      Z
                    `}
                    fill={payload.color}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

<div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
  <div className="flex items-start gap-3">

    <div className="rounded-xl bg-blue-100 p-2">
      <Lightbulb
        size={20}
        className="text-blue-600"
      />
    </div>

    <div>

      <h3 className="font-semibold text-slate-900">
        AI Insight
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {insight}
      </p>

    </div>

  </div>
</div>

    </motion.div>
  );
}