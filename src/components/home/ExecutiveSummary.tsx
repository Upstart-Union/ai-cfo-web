"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  BrainCircuit,
  ShieldCheck,
  TriangleAlert,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

export default function ExecutiveSummary() {
  const summary = useDashboardStore(
    (state) => state.summary
  );

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
      className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
    >

      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-8 text-white">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-white/10 p-4">

              <BrainCircuit size={34} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Executive Intelligence
              </h2>

              <p className="mt-1 text-blue-100">
                AI-generated business insights
              </p>

            </div>

          </div>

          <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm">

            Gemini Online

          </div>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr] p-8">

        {/* LEFT */}

        <div className="space-y-5">

          <div className="rounded-2xl bg-slate-50 p-5">

            <div className="flex items-center gap-3">

              <Sparkles className="text-yellow-500" />

              <span className="font-semibold">
                AI Confidence
              </span>

            </div>

            <h3 className="mt-4 text-5xl font-black text-blue-600">
              94%
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              High confidence based on uploaded
              financial metrics.
            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-green-600" />

              <span className="font-semibold">
                Financial Health
              </span>

            </div>

            <p className="mt-3 text-slate-600">
              Stable cash flow, healthy profitability
              and controlled expenses.
            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="flex items-center gap-3">

              <TriangleAlert className="text-orange-500" />

              <span className="font-semibold">
                Risk Level
              </span>

            </div>

            <p className="mt-3 text-slate-600">

              Low

            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="flex items-center gap-3">

              <TrendingUp className="text-blue-600" />

              <span className="font-semibold">
                Growth Outlook
              </span>

            </div>

            <p className="mt-3 text-slate-600">

              Positive

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <article className="prose prose-slate max-w-none rounded-3xl border bg-slate-50 p-8">

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {summary ??
              "Upload a financial report to generate AI insights."}
          </ReactMarkdown>

        </article>

      </div>

    </motion.section>
  );
}