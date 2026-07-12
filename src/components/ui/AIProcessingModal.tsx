"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  Database,
  FileText,
  LineChart,
  Loader2,
  ScanSearch,
  Sparkles,
} from "lucide-react";

interface Props {
  open: boolean;
  step: number;
}

const steps = [
  {
    icon: FileText,
    title: "Parsing Financial Statement",
  },
  {
    icon: Database,
    title: "Validating Financial Data",
  },
  {
    icon: ScanSearch,
    title: "Calculating Financial KPIs",
  },
  {
    icon: BrainCircuit,
    title: "Generating Executive Report",
  },
  {
    icon: Sparkles,
    title: "Creating AI Recommendations",
  },
  {
    icon: LineChart,
    title: "Forecasting Business Performance",
  },
];

export default function AIProcessingModal({
  open,
  step,
}: Props) {
  const progress = Math.min(
    ((step + 1) / steps.length) * 100,
    100
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
            }}
            className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">

                <BrainCircuit size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  AI CFO Processing
                </h2>

                <p className="mt-1 text-slate-500">
                  Building your executive financial analysis...
                </p>

              </div>

            </div>

            <div className="mt-8">

              <div className="mb-2 flex justify-between text-sm">

                <span className="font-medium">
                  Progress
                </span>

                <span className="font-semibold text-blue-600">
                  {Math.round(progress)}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />

              </div>

            </div>

            <div className="mt-8 space-y-4">

              {steps.map((item, index) => {

                const Icon = item.icon;

                const done = index < step;
                const active = index === step;

                return (

                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
                      active
                        ? "border-blue-500 bg-blue-50"
                        : done
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className={`rounded-xl p-3 ${
                          active
                            ? "bg-blue-600 text-white"
                            : done
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >

                        {active ? (
                          <Loader2
                            size={22}
                            className="animate-spin"
                          />
                        ) : done ? (
                          <CheckCircle2 size={22} />
                        ) : (
                          <Icon size={22} />
                        )}

                      </div>

                      <div>

                        <p className="font-semibold">
                          {item.title}
                        </p>

                        <p className="text-sm text-slate-500">
                          {done
                            ? "Completed"
                            : active
                            ? "Processing..."
                            : "Waiting"}
                        </p>

                      </div>

                    </div>

                    {done && (
                      <CheckCircle2
                        className="text-emerald-600"
                        size={24}
                      />
                    )}

                  </motion.div>

                );

              })}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
