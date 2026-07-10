import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <BrainCircuit size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">AI CFO</h1>
            <p className="text-xs text-slate-500">
              AI Financial Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-slate-500 md:block">
            AMD AI Developer Act II
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-semibold">
            U
          </div>
        </div>
      </div>
    </header>
  );
}