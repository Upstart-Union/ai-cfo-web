"use client";

import Link from "next/link";
import { ArrowUpRight, Upload } from "lucide-react";

export default function DashboardHero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-10 text-white shadow-lg">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-blue-100">
            Welcome back
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            AI CFO Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Monitor financial performance, generate AI insights,
            forecast future growth, and make smarter business
            decisions from one centralized dashboard.
          </p>

        </div>

        <div className="flex gap-4">

          <Link
            href="/upload"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105"
          >
            <Upload size={18} />
            Upload Report
          </Link>

          <Link
            href="/chat"
            className="flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 transition hover:bg-white/10"
          >
            AI CFO
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}
