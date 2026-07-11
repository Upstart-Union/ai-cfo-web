"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useDashboardStore } from "@/stores/dashboard";

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];

export default function CategoryPieChart() {

  const dashboard = useDashboardStore(
    (s) => s.dashboard
  );

  if (!dashboard) {
    return (
      <div className="flex h-80 items-center justify-center text-slate-500">
        Upload a report to view expense analysis.
      </div>
    );
  }

  const total = dashboard.expenses;

  const data = [
    { name: "Operations", value: total * 0.35 },
    { name: "Payroll", value: total * 0.30 },
    { name: "Marketing", value: total * 0.15 },
    { name: "Utilities", value: total * 0.10 },
    { name: "Other", value: total * 0.10 },
  ];

  return (
    <>
      <h3 className="mb-5 text-xl font-semibold">
        Expense Breakdown
      </h3>

      <div className="h-80">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >

              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i]}
                />
              ))}

            </Pie>

            <Legend />

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>
    </>
  );
}
