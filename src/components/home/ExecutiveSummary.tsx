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
      className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
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

          
          <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-5 py-2">

            <div className="h-2 w-2 rounded-full bg-green-400"/>

            <span className="text-sm font-semibold">
              Gemini Online
            </span>

          </div>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr] p-8">

        {/* LEFT */}

        <div className="space-y-5">

          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-yellow-100 p-2">

                <Sparkles className="text-yellow-600" size={20}/>

              </div>

              <span className="font-semibold text-slate-800">
                AI Confidence
              </span>

            </div>

            <h3 className="mt-5 text-6xl font-black tracking-tight text-blue-600">
              94%
            </h3>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-blue-100">

              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"/>

            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Generated using uploaded financial metrics and AI analysis.
            </p>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <ShieldCheck className="text-green-600"/>

                  <span className="font-semibold">
                    Financial Health
                  </span>

                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Excellent
                </span>

              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Strong profitability with healthy operating margins.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <TriangleAlert className="text-orange-500"/>

                  <span className="font-semibold">
                    Risk Level
                  </span>

                </div>

                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  Low
                </span>

              </div>

              <p className="mt-4 text-sm text-slate-500">
                No significant financial risks detected.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <TrendingUp className="text-blue-600"/>

                  <span className="font-semibold">
                    Growth Outlook
                  </span>

                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  Positive
                </span>

              </div>

              <p className="mt-4 text-sm text-slate-500">
                AI forecasts continued business growth.
              </p>

            </div>

          </div>

        </div>
        {/* RIGHT */}

        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-8 py-5 backdrop-blur">

            <div>

              <h3 className="text-2xl font-bold">
                Executive Report
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                AI-generated executive financial analysis.
              </p>

            </div>

            <BrainCircuit className="text-blue-600" />

          </div>

          <article
            className="
              prose
              prose-slate
              max-w-none
              h-[650px]
              overflow-y-auto
              p-8
              pb-20

              prose-headings:font-bold
              prose-headings:text-slate-900

              prose-h1:text-3xl
              prose-h2:text-2xl
              prose-h3:text-xl

              prose-h2:mt-10
              prose-h3:mt-8

              prose-p:text-[16px]
              prose-p:leading-8

              prose-li:leading-8

              prose-strong:text-slate-900
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {summary ??
                "Upload a financial report to generate AI insights."}
            </ReactMarkdown>
          </article>

        </div>
      </div>

    </motion.section>
  );
}