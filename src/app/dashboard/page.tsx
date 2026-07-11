"use client";

import Navbar from "@/components/common/Navbar";

import DashboardHero from "@/components/home/DashboardHero";
import EmptyDashboard from "@/components/home/EmptyDashboard";
import FinancialOverview from "@/components/home/FinancialOverview";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import Charts from "@/components/charts/Charts";

import RecentActivity from "@/components/home/RecentActivity";

import { useDashboardStore } from "@/stores/dashboard";

export default function DashboardPage() {

  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <div
        id="analysis-section"
        className="mx-auto max-w-7xl space-y-10 px-6 py-8"
      >

        <DashboardHero />

        {!dashboard ? (
          <EmptyDashboard />
        ) : (
          <>
            <FinancialOverview />

            <ExecutiveSummary />

            <Charts />

            <RecentActivity />
          </>
        )}

      </div>

    </main>
  );
}
