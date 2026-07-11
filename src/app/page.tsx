import Navbar from "@/components/common/Navbar";
import UploadCard from "@/components/home/UploadCard";
import FinancialOverview from "@/components/home/FinancialOverview";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import Charts from "@/components/charts/Charts";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        <UploadCard />

        <div
          id="analysis-section"
          className="space-y-8 scroll-mt-24"
        >
          <FinancialOverview />

          <ExecutiveSummary />

          <Charts />
        </div>

      </div>
    </main>
  );
}