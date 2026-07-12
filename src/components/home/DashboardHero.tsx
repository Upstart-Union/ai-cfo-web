"use client";
import CountUp from "react-countup";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Upload,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  TrendingUp,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  DollarSign,
  Bot,
} from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

import Image from "next/image";

export default function DashboardHero() {

  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const margin = dashboard?.profit_margin ?? 0;
  const hasData = dashboard !== null;

    const healthScore = (() => {
  if (!dashboard) return 0;

  let score = 0;

  score += Math.min(dashboard.profit_margin, 40);

  if (dashboard.profit > 0) score += 25;

  if (dashboard.revenue > dashboard.expenses)
    score += 20;

  const ratio =
    dashboard.profit / dashboard.revenue;

  if (ratio >= 0.25) score += 15;
  else if (ratio >= 0.15) score += 10;
  else if (ratio >= 0.05) score += 5;

  return Math.min(100, Math.round(score));
})();

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
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-8 text-white shadow-2xl"
    >
      {/* Decorative Blur */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />



      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">

      <motion.div
          animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
          }}
          className="
          absolute
          left-[-30px]
          bottom-[-90px]
          pointer-events-none
          -z-10
          "
      >

      <Image
          src="/images/hero-chart.png"
          alt=""
          width={560}
          height={560}
          className="
          w-[520px]
          opacity-20
          drop-shadow-[0_0_100px_rgba(59,130,246,.75)]
          "
      />

      </motion.div>
        {/* Left */}

        <div className="flex min-h-full flex-col">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">

            <Sparkles size={16} />

            AI Powered Financial Intelligence

          </div>

          <h1 className="mt-5 text-5xl font-black tracking-tight">

            Executive
            <br />
            Command Center

          </h1>

          <p className="mt-5 max-w-xl text-lg leading-7 text-blue-100">

            Transform financial statements into executive
            insights, forecasts, and strategic recommendations, Aritifical Intelligence Powered CFO.

          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">

                <CheckCircle2 size={14} className="text-cyan-300"/>

                Executive Reports

            </div>

            <span className="rounded-full bg-white/10 px-3 py-1 text-s text-cyan-200">
              AI Forecasting
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-s text-cyan-200">
              Strategic Insights
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-s text-cyan-200">
              Scenario Simulator
            </span>

          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            
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

          <div className="relative mt-10 h-32">

            <motion.div
            animate={{
                y: [0, -30, 0],
                x: [30, 0, 0],
            }}

            transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
            className="
            absolute
            left-50
            top-6
            rounded-2xl
            bg-slate-900/30
            backdrop-blur-xl
            border
            border-white/10
            px-5
            py-4
            shadow-2xl
            "
            >

            <p className="text-xs text-cyan-200">
            AI Confidence
            </p>

            <h3 className="mt-1 text-2xl font-bold">
            98%
            </h3>

            </motion.div>

            <motion.div
            animate={{
                y: [0, -30, 0],
                x: [-30, 0, 0],
            }}

            transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
            className="
            absolute
            left-95
            top-6
            rounded-2xl
            bg-slate-900/30
            backdrop-blur-xl
            border
            border-white/10
            px-5
            py-4
            shadow-2xl
            "
            >

            <p className="text-xs text-cyan-200">
            Forecast
            </p>

            <h3 className="mt-1 text-xl font-bold">
            6 Months
            </h3>

            </motion.div>

            <motion.div
            animate={{
                y: [0, -30, 0],
                x: [-30, 0, 0],
            }}

            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
            className="
            absolute
            left-15
            top-7
            rounded-2xl
            bg-slate-900/30
            backdrop-blur-xl
            border
            border-white/10
            px-5
            py-4
            shadow-2xl
            "
            >

            <p className="text-xs text-cyan-200">
            Executive Report
</p>

<h3 className="mt-1 text-xl font-bold">
Ready ✓
</h3>

</motion.div>

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
            delay: 0.25,
          }}
          className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
        >

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold">
              Executive Dashboard
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              AI-generated financial intelligence
            </p>

          </div>

          <div
            className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold
            ${
              hasData
                ? "bg-emerald-500/20 text-emerald-200"
                : "bg-yellow-400/20 text-yellow-200"
            }`}
          >

            <span
              className={`h-2.5 w-2.5 animate-pulse rounded-full ${
                hasData
                  ? "bg-emerald-400"
                  : "bg-yellow-400"
              }`}
            />

            <motion.span
              animate={{ opacity: [1, .6, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >

              {hasData ? "Online" : "Awaiting Report"}

            </motion.span>

          </div>

        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wide text-blue-100">
              Revenue
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {hasData ? (

                <CountUp
                  end={dashboard!.revenue}
                  duration={2}
                  separator=","
                  prefix="$"
                />

              ) : (

                <span className="text-slate-300">—</span>

              )}
            </h3>

          </div>

          <div className="rounded-2xl bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wide text-blue-100">
              Profit
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {hasData ? (

                <CountUp
                  end={dashboard!.profit}
                  duration={2}
                  separator=","
                  prefix="$"
                />

              ) : (

                <span className="text-slate-300">—</span>

              )}
            </h3>

          </div>

          <div className="rounded-2xl bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wide text-blue-100">
              Margin
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {hasData ? (

                <CountUp
                  end={margin}
                  decimals={1}
                  suffix="%"
                  duration={2}
                />

              ) : (

                <span className="text-slate-300">—</span>

              )}
            </h3>

          </div>

        </div>

<div className="mt-6">

  <div className="mb-2 flex items-center justify-between">

    <span className="text-sm font-medium">
      Financial Health Score
    </span>

    <span className="font-bold">

      {!hasData
        ? "No Report Uploaded"
        : healthScore >= 85
        ? "Excellent"
        : healthScore >= 70
        ? "Good"
        : healthScore >= 50
        ? "Fair"
        : "Needs Attention"}

      {" "}
      {hasData && <> ({healthScore}%)</>}

    </span>

  </div>

  <div className="relative h-3 overflow-hidden rounded-full bg-white/20">

    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: hasData
          ? `${healthScore}%`
          : "0%"
      }}
      transition={{
        duration: 1.8,
        ease: "easeOut",
      }}
      className={`
      absolute
      left-0
      top-0
      h-full
      rounded-full
      bg-gradient-to-r
      ${hasData
        ? "from-cyan-300 via-sky-400 to-emerald-400"
        : "from-slate-400 to-slate-500"}
      `}
    />

  </div>

</div>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-2xl border border-white/20 bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wide text-blue-100">
              AI Status
            </p>

            <h3 className="mt-2 font-bold text-emerald-300">
              {hasData ? "Ready" : "Waiting"}
            </h3>

          </div>

          <div className="rounded-2xl border border-white/20 bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wide text-blue-100">
              Forecast
            </p>

            <h3 className="mt-2 font-bold text-cyan-300">
              {hasData ? "Generated" : "Not Available"}
            </h3>

          </div>

        </div>

        <div className={`
        mt-6
        rounded-2xl
        p-5
        border
        ${
            hasData
                ? "border-emerald-300/20 bg-emerald-500/10"
                : "border-yellow-300/20 bg-yellow-500/10"
        }
        `}>

          <div className="flex items-start gap-3">

            <div className="
            flex
            h-11
            w-35
            items-center
            justify-center
            rounded-xl
            bg-yellow-400/15
            ">

                <Upload
                    size={20}
                    className="text-yellow-300"
                />

            </div>
              {hasData ? (

              <>
                <p className="font-semibold">
                  Analysis Complete
                </p>

                <p className="mt-1 text-sm text-blue-100">

                  Executive report, AI recommendations,
                  and forecast are ready.

                </p>
              </>

              ) : (

              <>
                <p className="font-semibold">
                  Awaiting Upload
                </p>

                <p className="mt-0 text-sm text-blue-100">

                  Upload a financial report to unlock
                  AI insights, executive summaries,
                  forecasts, recommendations and
                  intelligent financial analysis.

                </p>

              </>

              )}

          </div>

        </div>

      </motion.div>

      </div>

    </motion.section>
  );
}