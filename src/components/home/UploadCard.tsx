"use client";

import { UploadCloud } from "lucide-react";

export default function UploadCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-8">

        <h2 className="text-2xl font-bold">
          Upload Financial Report
        </h2>

        <p className="mt-2 text-slate-500">
          Upload a CSV or Excel file to generate financial insights.
        </p>

        <div className="mt-6 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 transition hover:border-blue-500">

          <div className="flex flex-col items-center">

            <UploadCloud
              className="text-blue-600"
              size={48}
            />

            <h3 className="mt-4 text-lg font-semibold">
              Drag & Drop
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              CSV or Excel files
            </p>

            <button
              className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Choose File
            </button>

            <p className="mt-6 text-xs text-slate-400">
              Supported: .csv .xlsx
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}