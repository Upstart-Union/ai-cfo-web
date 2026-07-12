"use client";

import { motion } from "framer-motion";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { expenseBreakdown } from "@/data/charts";

const COLORS = [
  "#2563EB",
  "#06B6D4",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

export default function CategoryPieChart() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
        delay: .15,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Expense Breakdown
          </h2>

          <p className="text-sm text-slate-500">
            Distribution of operating expenses
          </p>

        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">

          5 Categories

        </span>

      </div>

      <div className="relative h-80">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={expenseBreakdown}
              dataKey="value"
              nameKey="name"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={4}
              cornerRadius={8}
            >

              {expenseBreakdown.map((_, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index %
                      COLORS.length
                    ]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">

          <h2 className="text-4xl font-black">

            100%

          </h2>

          <p className="text-sm text-slate-500">

            Expenses

          </p>

        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {expenseBreakdown.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
          >

            <div className="flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  background:
                    COLORS[
                      index %
                      COLORS.length
                    ],
                }}
              />

              <span className="text-sm font-medium">

                {item.name}

              </span>

            </div>

            <span className="font-semibold">

              {item.value}%

            </span>

          </div>

        ))}

      </div>

    </motion.div>
  );
}