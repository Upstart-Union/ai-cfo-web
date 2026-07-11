"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, Sparkles } from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";
import { generateSummary } from "@/api/summary";

export default function ExecutiveSummary() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const [summary, setSummary] = useState(
    "Upload a financial report to generate an AI executive summary."
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dashboard) return;

    async function loadSummary() {
      try {
        setLoading(true);

        const result =
          await generateSummary(dashboard);

        setSummary(result.summary);
      } catch (err) {
        console.error(err);

        setSummary(
          "Unable to generate executive summary."
        );
      } finally {
        setLoading(false);
      }
    }

    loadSummary();
  }, [dashboard]);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6 text-white">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-white/20 p-3">

            <Bot size={28} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              AI Executive Summary
            </h2>

            <p className="text-blue-100">
              Powered by Gemini AI
            </p>

          </div>

        </div>

        <Sparkles />

      </div>

      <div className="p-8">

        {loading ? (

          <div className="flex flex-col items-center py-12">

            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

            <p className="mt-5 text-slate-600">
              Gemini is analyzing your report...
            </p>

          </div>

        ) : (

          <article className="prose prose-slate max-w-none">

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {summary}
            </ReactMarkdown>

          </article>

        )}

      </div>

    </section>
  );
}
