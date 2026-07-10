import RevenueChart from "./RevenueChart";
import CategoryPieChart from "./CategoryPieChart";

export default function Charts() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">
          Financial Analytics
        </h2>

        <p className="text-slate-500">
          Visual insights generated from your uploaded financial data.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />

        <CategoryPieChart />
      </div>
    </section>
  );
}