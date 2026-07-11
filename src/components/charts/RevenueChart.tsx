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

export default function RevenueChart() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  if (!dashboard) return null;

  const data = [
    {
      name: "Revenue",
      value: dashboard.revenue,
    },
    {
      name: "Expenses",
      value: dashboard.expenses,
    },
    {
      name: "Profit",
      value: dashboard.profit,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Financial Comparison
        </h2>

        <p className="text-sm text-slate-500">
          Live metrics extracted from the uploaded report.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip
              formatter={(value: unknown) => [
                `₱${Number(value).toLocaleString()}`,
                "",
              ]}
            />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              fill="#2563EB"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}