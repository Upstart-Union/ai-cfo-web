import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
};

export default function StatCard({
  title,
  value,
  change,
  positive,
}: Props) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        {value}
      </h2>

      <div
        className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
          positive
            ? "bg-green-50 text-green-600"
            : "bg-red-50 text-red-600"
        }`}
      >
        {positive ? (
          <ArrowUpRight size={16} />
        ) : (
          <ArrowDownRight size={16} />
        )}

        {change}
      </div>

    </div>
  );
}