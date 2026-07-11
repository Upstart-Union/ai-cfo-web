"use client";

interface Props {
  open: boolean;
  step: number;
}

const steps = [
  "Uploading financial report",
  "Extracting financial data",
  "Computing financial metrics",
  "Generating executive summary",
  "Forecasting future performance",
  "Preparing dashboard",
];

export default function AIProcessingModal({
  open,
  step,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <div className="text-center">

          <div className="text-6xl animate-bounce">
            🤖
          </div>

          <h2 className="mt-5 text-3xl font-bold">
            AI CFO
          </h2>

          <p className="mt-2 text-slate-500">
            Please wait while we analyze your report...
          </p>

        </div>

        <div className="mt-10 space-y-4">

          {steps.map((item, index) => (

            <div
              key={item}
              className="flex items-center justify-between"
            >

              <span>{item}</span>

              {index < step ? (
                <span className="text-green-600 text-xl">
                  ✓
                </span>
              ) : index === step ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
              ) : (
                <span className="text-slate-300">
                  ○
                </span>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
