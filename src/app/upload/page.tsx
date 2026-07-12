import Navbar from "@/components/common/Navbar";
import UploadCard from "@/components/home/UploadCard";

import {
  Sparkles,
  BarChart3,
  BrainCircuit,
  TrendingUp,
  Bot,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Executive Dashboard",
    description: "Interactive financial KPIs",
    icon: BarChart3,
  },
  {
    title: "AI CFO",
    description: "Ask questions naturally",
    icon: Bot,
  },
  {
    title: "Forecast",
    description: "6-month AI prediction",
    icon: TrendingUp,
  },
  {
    title: "Strategic Insights",
    description: "Executive recommendations",
    icon: BrainCircuit,
  },
];

const pipeline = [
  "Upload CSV",
  "Extract Metrics",
  "Gemini AI",
  "Generate Insights",
  "Dashboard",
];

const outputs = [
  "Executive Dashboard",
  "AI CFO Chat",
  "Financial Forecast",
  "Strategic Recommendations",
];

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Hero */}

        <div className="max-w-4xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

            <Sparkles size={16} />

            AI Financial Intelligence

          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight">

            Upload Financial Report

          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">

            Upload your financial statement and let AI CFO
            generate executive dashboards, AI insights,
            strategic recommendations and 6-month forecasts
            powered by Gemini AI.

          </p>

        </div>

        {/* Features */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                "
              >

                <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4">

                  <Icon
                    size={24}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="font-bold">

                  {item.title}

                </h3>

                <p className="mt-2 text-sm text-slate-500">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

        {/* Upload */}

        <div className="mt-12">

          <UploadCard />

        </div>

        {/* Pipeline */}

        <section className="mt-16">

          <h2 className="mb-8 text-2xl font-bold">

            AI Processing Pipeline

          </h2>

          <div className="grid gap-6 md:grid-cols-5">

            {pipeline.map((step, index) => (

              <div
                key={step}
                className="
                rounded-3xl
                bg-white/90
                backdrop-blur
                p-6
                shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                ring-1
                ring-white
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]
                "
              >

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">

                  {index + 1}

                </div>

                <p className="font-semibold">

                  {step}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Outputs */}

        <section className="mt-16 mb-12">

          <h2 className="mb-8 text-2xl font-bold">

            After Analysis You'll Receive

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {outputs.map((item) => (

              <div
                key={item}
                className="
                rounded-3xl
                bg-white/90
                backdrop-blur
                p-6
                shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                ring-1
                ring-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]
                "
              >

                <CheckCircle2
                  className="mb-5 text-green-500"
                />

                <h3 className="font-semibold">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}