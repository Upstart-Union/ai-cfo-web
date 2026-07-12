"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ShieldCheck,
  TrendingUp,
  DollarSign,
} from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

export default function AICFOScore() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  if (!dashboard) return null;

  const score = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        dashboard.profit_margin * 2 +
        (dashboard.profit > 0 ? 20 : 0)
      )
    )
  );

  const rating =
    score >= 90
      ? "Excellent"
      : score >= 75
      ? "Good"
      : score >= 60
      ? "Average"
      : "Needs Attention";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-xl"
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-blue-100">
            AI CFO Score
          </p>

          <h2 className="mt-2 text-6xl font-black">

            <CountUp
              end={score}
              duration={1.4}
            />

          </h2>

          <p className="mt-2 text-lg text-blue-100">

            {rating} Financial Health

          </p>

        </div>

        <ShieldCheck
          size={72}
          className="opacity-80"
        />

      </div>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/20">

        <motion.div
          initial={{
            width:0,
          }}
          animate={{
            width:`${score}%`,
          }}
          transition={{
            duration:1.2,
          }}
          className="h-full rounded-full bg-white"
        />

      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-white/10 p-4">

          <DollarSign/>

          <p className="mt-3 text-sm text-blue-100">

            Profit Margin

          </p>

          <p className="text-2xl font-bold">

            {dashboard.profit_margin.toFixed(1)}%

          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-4">

          <TrendingUp/>

          <p className="mt-3 text-sm text-blue-100">

            Net Profit

          </p>

          <p className="text-2xl font-bold">

            ${dashboard.profit.toLocaleString()}

          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-4">

          <ShieldCheck/>

          <p className="mt-3 text-sm text-blue-100">

            Status

          </p>

          <p className="text-2xl font-bold">

            {rating}

          </p>

        </div>

      </div>

    </motion.section>
  );
}