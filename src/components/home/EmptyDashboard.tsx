"use client";

import Link from "next/link";
import { UploadCloud, FileSpreadsheet } from "lucide-react";

export default function EmptyDashboard() {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <FileSpreadsheet size={42} />
      </div>

      <h2 className="mt-8 text-3xl font-bold">
        No Financial Report Yet
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-500">
        Upload your first financial report to unlock AI-powered
        dashboards, executive summaries, forecasts, and business insights.
      </p>

      <Link
        href="/upload"
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        <UploadCloud size={20} />

        Upload Financial Report
      </Link>

    </section>
  );
}
