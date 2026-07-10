import Navbar from "@/components/common/Navbar";

import UploadCard from "@/components/home/UploadCard";
import FinancialOverview from "@/components/home/FinancialOverview";
import Charts from "@/components/charts/Charts";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import AIChat from "@/components/home/AIChat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-6 p-6">
        <UploadCard />

        <FinancialOverview />

        <Charts />

        <ExecutiveSummary />

        <AIChat />
      </div>
    </main>
  );
}