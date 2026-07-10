import Navbar from "@/components/common/Navbar";
import UploadCard from "@/components/home/UploadCard";
import FinancialOverview from "@/components/home/FinancialOverview";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        <UploadCard />

        <FinancialOverview />

      </div>
    </main>
  );
}