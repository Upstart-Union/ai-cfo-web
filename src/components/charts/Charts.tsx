"use client";

import { motion } from "framer-motion";

import RevenueChart from "./RevenueChart";
import CategoryPieChart from "./CategoryPieChart";
import ProfitAreaChart from "./ProfitAreaChart";

export default function Charts() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <motion.div
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
          duration: .6,
        }}
        className="flex flex-col gap-2"
      >

        <span className="inline-flex w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

          Analytics Center

        </span>

        <h2 className="text-4xl font-black">

          Financial Analytics

        </h2>

        <p className="max-w-2xl text-slate-500">

          Visualize business performance through interactive
          financial analytics powered by AI.

        </p>

      </motion.div>

      {/* Grid */}

      <div className="grid gap-7 xl:grid-cols-2">

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
        >

          <RevenueChart />

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
            delay: .15,
          }}
        >

          <CategoryPieChart />

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            delay: .3,
          }}
          className="xl:col-span-2"
        >

          <ProfitAreaChart />

        </motion.div>

      </div>

    </section>
  );
}