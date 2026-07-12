"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  CircleDollarSign,
} from "lucide-react";

import { useDashboardStore } from "@/stores/dashboard";

export default function AIRecommendations() {
  const recommendations = useDashboardStore(
    (state) => state.recommendations
  );

  if (recommendations.length === 0) return null;

  function getIcon(priority: string) {
    switch (priority) {
      case "High":
        return {
          Icon: AlertTriangle,
          color: "text-red-500",
          badge: "bg-red-100 text-red-700",
        };

      case "Medium":
        return {
          Icon: CircleDollarSign,
          color: "text-blue-600",
          badge: "bg-blue-100 text-blue-700",
        };

      default:
        return {
          Icon: TrendingUp,
          color: "text-emerald-600",
          badge: "bg-emerald-100 text-emerald-700",
        };
    }
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">

          <Lightbulb className="text-blue-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            AI Recommendations
          </h2>

          <p className="text-slate-500">
            Executive recommendations generated specifically for this financial report.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">

        {recommendations.map((item) => {

          const {
            Icon,
            color,
            badge,
          } = getIcon(item.priority);

          return (

            <motion.div
              key={item.title}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{
                duration: 0.16,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow duration-200 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <Icon
                  className={color}
                  size={28}
                />

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}
                >
                  {item.priority}
                </span>

              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

            </motion.div>

          );
        })}

      </div>

    </motion.section>
  );
}