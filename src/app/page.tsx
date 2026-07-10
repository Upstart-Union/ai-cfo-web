import Navbar from "@/components/common/Navbar";
import UploadCard from "@/components/home/UploadCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="mx-auto max-w-7xl p-6">
        <UploadCard />
      </div>
    </main>
  );
}