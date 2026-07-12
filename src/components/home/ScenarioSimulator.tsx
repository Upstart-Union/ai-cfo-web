"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  PiggyBank,
  Sparkles,
} from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

export default function ScenarioSimulator() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const [revenueChange, setRevenueChange] = useState(10);
  const [expenseChange, setExpenseChange] = useState(5);

  if (!dashboard) return null;

  const result = useMemo(() => {
    const revenue =
      dashboard.revenue * (1 + revenueChange / 100);

    const expenses =
      dashboard.expenses * (1 + expenseChange / 100);

    const profit = revenue - expenses;

    const margin =
      revenue === 0 ? 0 : (profit / revenue) * 100;

    return {
      revenue,
      expenses,
      profit,
      margin,
    };
  }, [
    dashboard,
    revenueChange,
    expenseChange,
  ]);

  const recommendation = useMemo(() => {
    const marginDiff =
      result.margin - dashboard.profit_margin;

    if (marginDiff >= 8) {
      return {
        title: "Excellent Growth Scenario",
        color: "border-emerald-200 bg-emerald-50",
        text:
          "Projected profitability improves significantly. The business could generate substantially stronger earnings while maintaining healthy margins. If this growth is achievable, reinvesting part of the additional profit into expansion or product development would be a reasonable strategy.",
      };
    }

    if (marginDiff >= 3) {
      return {
        title: "Positive Financial Outlook",
        color: "border-blue-200 bg-blue-50",
        text:
          "The projected changes improve financial performance without introducing significant downside. Maintaining expense discipline while sustaining revenue growth should strengthen long-term profitability.",
      };
    }

    if (marginDiff >= 0) {
      return {
        title: "Stable Scenario",
        color: "border-cyan-200 bg-cyan-50",
        text:
          "Financial performance remains relatively stable. While profitability does not change dramatically, the business maintains healthy operating margins with limited additional risk.",
      };
    }

    if (marginDiff > -5) {
      return {
        title: "Monitor Carefully",
        color: "border-amber-200 bg-amber-50",
        text:
          "The proposed changes reduce profitability. Before adopting this strategy, consider identifying additional revenue opportunities or lowering operating costs to preserve financial health.",
      };
    }

    return {
      title: "High Risk Scenario",
      color: "border-red-200 bg-red-50",
      text:
        "The simulation indicates a significant decline in profitability. Implementing this scenario without additional safeguards could weaken long-term financial stability. Expense reductions or stronger revenue growth should be evaluated first.",
    };
  }, [dashboard.profit_margin, result.margin]);

  return (
    <motion.section
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
        duration: 0.5,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-4 text-white">

          <Sparkles size={28} />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Financial Scenario Simulator
          </h2>

          <p className="text-slate-500">
            Explore how changes in revenue and expenses
            affect future financial performance.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div className="space-y-8">

          <div>

            <div className="mb-3 flex justify-between">

              <span className="font-medium">
                Revenue Change
              </span>

              <span className="font-semibold text-blue-600">
                {revenueChange}%
              </span>

            </div>

            <input
              type="range"
              min="-20"
              max="50"
              value={revenueChange}
              onChange={(e) =>
                setRevenueChange(
                  Number(e.target.value)
                )
              }
              className="w-full"
            />

          </div>

          <div>

            <div className="mb-3 flex justify-between">

              <span className="font-medium">
                Expense Change
              </span>

              <span className="font-semibold text-red-500">
                {expenseChange}%
              </span>

            </div>

            <input
              type="range"
              min="-20"
              max="50"
              value={expenseChange}
              onChange={(e) =>
                setExpenseChange(
                  Number(e.target.value)
                )
              }
              className="w-full"
            />

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-50 p-5">

            <DollarSign className="text-blue-600" />

            <p className="mt-4 text-sm text-slate-500">
              Revenue
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ₱{result.revenue.toLocaleString()}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <PiggyBank className="text-red-500" />

            <p className="mt-4 text-sm text-slate-500">
              Expenses
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ₱{result.expenses.toLocaleString()}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <TrendingUp className="text-emerald-600" />

            <p className="mt-4 text-sm text-slate-500">
              Net Profit
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ₱{result.profit.toLocaleString()}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <Sparkles className="text-violet-600" />

            <p className="mt-4 text-sm text-slate-500">
              Profit Margin
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {result.margin.toFixed(1)}%
            </h3>

          </div>

        </div>

      </div>

      <div
        className={`mt-8 rounded-2xl border p-6 ${recommendation.color}`}
      >

        <h3 className="text-xl font-bold">
          {recommendation.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-700">
          {recommendation.text}
        </p>

      </div>

    </motion.section>
  );
}