"use client";

import CountUp from "react-countup";

import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Wallet,
  TrendingUp,
  Activity,
} from "lucide-react";

type Props = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
};

export default function StatCard({
  title,
  value,
  change,
  positive,
}: Props) {
  const icon =
    title === "Revenue"
      ? <DollarSign size={22} />
      : title === "Expenses"
      ? <Wallet size={22} />
      : title === "Net Profit"
      ? <TrendingUp size={22} />
      : <Activity size={22} />;

  const numericValue = Number(
    value.replace(/[$,%/A-Za-z ]/g, "")
  );

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">

            {title === "Financial Health" ? (
              value
            ) : (
              <>
                $
                <CountUp
                  end={numericValue}
                  duration={1.8}
                  separator=","
                />
              </>
            )}

          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110">

          {icon}

        </div>

      </div>

      <div
        className={`mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
          positive
            ? "bg-green-50 text-green-600"
            : "bg-red-50 text-red-600"
        }`}
      >
        {positive ? (
          <ArrowUpRight size={16} />
        ) : (
          <ArrowDownRight size={16} />
        )}

        {change}

      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">

        <div
          className={`h-full rounded-full ${
            positive
              ? "w-4/5 bg-green-500"
              : "w-2/5 bg-red-500"
          }`}
        />

      </div>

    </div>
  );
}