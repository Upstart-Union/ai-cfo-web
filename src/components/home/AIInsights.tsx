"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  TrendingUp,
  BadgeCheck,
  AlertTriangle,
} from "lucide-react";

export default function AIInsights() {
  const insights = [
    {
      icon: BadgeCheck,
      color: "bg-emerald-100 text-emerald-700",
      title: "Financial Health",
      value: "Excellent",
      description:
        "Profitability and cash flow indicate a stable financial position.",
    },
    {
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-700",
      title: "Growth Potential",
      value: "High",
      description:
        "Current profit margin supports reinvestment and business expansion.",
    },
    {
      icon: AlertTriangle,
      color: "bg-amber-100 text-amber-700",
      title: "Primary Risk",
      value: "Revenue Concentration",
      description:
        "Business performance relies heavily on current revenue streams.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">

          <BrainCircuit size={28} />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            AI Insights
          </h2>

          <p className="text-slate-500">
            Key findings automatically extracted from financial analysis.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">

        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
            key={item.title}
            whileHover={{
                y: -5,
                scale: 1.02,
            }}
            transition={{
                duration: 0.16,
                ease: "easeOut",
            }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow duration-200 hover:shadow-xl"
            >
              <div
                className={`inline-flex rounded-xl p-3 ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-xl font-semibold text-slate-900">
                {item.value}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

            </motion.div>
          );
        })}

      </div>
    </motion.section>
  );
}