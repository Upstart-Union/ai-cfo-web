import Navbar from "@/components/common/Navbar";
import UploadCard from "@/components/home/UploadCard";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-10">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Upload Financial Report
          </h1>

          <p className="mt-2 text-slate-500">
            Upload a CSV financial statement and let AI CFO generate
            insights, forecasts, and recommendations.
          </p>

        </div>

        <UploadCard />

      </div>

    </main>
  );
}
