"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Upload,
  Sparkles,
  Activity,
  ShieldCheck,
} from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

export default function DashboardHero() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const margin =
    dashboard?.profit_margin ?? 0;

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-10 text-white shadow-2xl"
    >
      {/* Decorative Blur */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">

            <Sparkles size={16} />

            AI Powered Financial Intelligence

          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight">

            Executive
            <br />
            Command Center

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">

            Transform financial statements into executive
            insights, forecasts, and strategic recommendations
            powered by Gemini AI.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/upload"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Upload size={18} />
                Upload Report
              </div>
            </Link>

            <Link
              href="/chat"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 backdrop-blur transition hover:bg-white/20"
            >
              <div className="flex items-center gap-2">
                AI CFO
                <ArrowUpRight size={18} />
              </div>
            </Link>

          </div>

        </div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: .25,
          }}
          className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold">
              AI Status
            </h2>

            <div className="flex items-center gap-2 text-green-300">

              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              Online

            </div>

          </div>

          <div className="mt-8 space-y-6">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Activity size={20} />

                Financial Health

              </div>

              <span className="font-bold">

                {margin >= 20
                  ? "Excellent"
                  : margin >= 10
                  ? "Good"
                  : "Needs Attention"}

              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${Math.min(
                    100,
                    margin * 3
                  )}%`,
                }}
                transition={{
                  duration: 1.4,
                }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-green-400"
              />

            </div>

            <div className="grid grid-cols-2 gap-5 pt-4">

              <div>

                <p className="text-sm text-blue-100">
                  Revenue
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  ₱{dashboard?.revenue.toLocaleString() ?? "0"}
                </h3>

              </div>

              <div>

                <p className="text-sm text-blue-100">
                  Profit
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  ₱{dashboard?.profit.toLocaleString() ?? "0"}
                </h3>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-white/20 bg-black/20 p-4">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-green-300"
                />

                <div>

                  <p className="font-semibold">
                    AI Analysis Ready
                  </p>

                  <p className="text-sm text-blue-100">

                    Gemini has analyzed your
                    uploaded financial report.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </motion.section>
  );
}