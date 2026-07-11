"use client";

import {
  FileSpreadsheet,
  BrainCircuit,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

const activities = [
  {
    icon: FileSpreadsheet,
    title: "Financial Report Uploaded",
    description: "CSV successfully processed.",
    color: "text-blue-600",
  },
  {
    icon: BrainCircuit,
    title: "Executive Summary Generated",
    description: "Gemini AI analyzed the report.",
    color: "text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Forecast Generated",
    description: "Financial projections are ready.",
    color: "text-green-600",
  },
  {
    icon: MessageSquare,
    title: "AI Assistant Ready",
    description: "Ask questions about your financial data.",
    color: "text-orange-600",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Recent Activity
      </h2>

      <p className="mt-2 text-slate-500">
        Latest actions completed by AI CFO.
      </p>

      <div className="mt-8 space-y-6">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-5"
            >

              <div className={`mt-1 ${item.color}`}>
                <Icon size={24}/>
              </div>

              <div className="flex-1 border-b border-slate-100 pb-5">

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.description}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Just now
                </p>

              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
}
