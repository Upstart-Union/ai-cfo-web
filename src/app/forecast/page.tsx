import Navbar from "@/components/common/Navbar";

import Charts from "@/components/charts/Charts";

export default function ForecastPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-8">

        <Charts />

      </div>

    </main>
  );
}
