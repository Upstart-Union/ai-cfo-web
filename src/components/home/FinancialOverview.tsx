import StatCard from "./StatCard";

import { dashboardData } from "@/data/dashboard";

export default function FinancialOverview() {
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

        <StatCard {...dashboardData.revenue} />
        <StatCard {...dashboardData.expenses} />
        <StatCard {...dashboardData.profit} />
        <StatCard {...dashboardData.health} />

      </div>

    </section>
  );
}