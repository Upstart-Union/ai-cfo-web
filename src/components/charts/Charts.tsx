import RevenueChart from "./RevenueChart";
import CategoryPieChart from "./CategoryPieChart";
import ProfitAreaChart from "./ProfitAreaChart";

export default function Charts() {
  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold">
          Financial Analytics
        </h2>

        <p className="mt-2 text-slate-500">
          AI-generated financial visualization.
        </p>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <RevenueChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <CategoryPieChart />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <ProfitAreaChart />
        </div>

      </div>

    </section>
  );
}
