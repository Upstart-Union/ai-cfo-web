"use client";

import StatCard from "./StatCard";

import { useDashboardStore } from "@/stores/dashboard";

export default function FinancialOverview() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const loading = useDashboardStore(
    (state) => state.dashboardLoading
  );

  if (loading) {
    return (
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            Financial Overview
          </h2>

          <p className="text-slate-500">
            AI is analyzing your financial report...
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {[1,2,3,4].map((i)=>(
            <div
              key={i}
              className="h-48 animate-pulse rounded-3xl bg-slate-200"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!dashboard) {
    return (
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            Financial Overview
          </h2>

          <p className="text-slate-500">
            Upload a financial report to view metrics.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>

      <div className="mb-4">

        <h2 className="text-2xl font-bold">
          Financial Overview
        </h2>

        <p className="text-slate-500">
          Key financial indicators generated from your uploaded report.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Revenue"
          value={`$${dashboard.revenue.toLocaleString()}`}
          change="Live Data"
          positive={true}
        />

        <StatCard
          title="Expenses"
          value={`$${dashboard.expenses.toLocaleString()}`}
          change="Live Data"
          positive={false}
        />

        <StatCard
          title="Net Profit"
          value={`$${dashboard.profit.toLocaleString()}`}
          change={`${dashboard.profit_margin}% Margin`}
          positive={dashboard.profit > 0}
        />

        <StatCard
          title="Financial Health"
          value={`${Math.min(
            100,
            Math.round(dashboard.profit_margin * 2.5)
          )}/100`}
          change={
            dashboard.profit_margin >= 20
              ? "Excellent"
              : dashboard.profit_margin >= 10
              ? "Good"
              : "Needs Attention"
          }
          positive={dashboard.profit_margin >= 20}
        />

      </div>

    </section>
  );
}
