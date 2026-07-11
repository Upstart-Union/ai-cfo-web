"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BrainCircuit,
  LayoutDashboard,
  Upload,
  TrendingUp,
  Bot,
  FileText,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/upload",
    label: "Upload",
    icon: Upload,
  },
  {
    href: "/forecast",
    label: "Forecast",
    icon: TrendingUp,
  },
  {
    href: "/chat",
    label: "AI CFO",
    icon: Bot,
  },
  {
    href: "/reports",
    label: "Reports",
    icon: FileText,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <BrainCircuit size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              AI CFO
            </h1>

            <p className="text-xs text-slate-500">
              AI Financial Assistant
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">

          {links.map((link) => {

            const Icon = link.icon;

            const active =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={18} />

                {link.label}
              </Link>
            );

          })}

        </nav>

        <div className="flex items-center gap-4">

          <span className="hidden text-sm text-slate-500 lg:block">
            AMD AI Developer Act II
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            U
          </div>

        </div>

      </div>

    </header>
  );
}
