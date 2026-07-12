"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  LayoutDashboard,
  Upload,
  TrendingUp,
  Bot,
  FileText,
  RotateCcw,
  ChevronDown,
  UserCircle2,
  Info,
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

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClick);

    return () =>
      window.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  function resetDemo() {
    localStorage.removeItem("ai-cfo-dashboard");
    localStorage.removeItem("ai-cfo-chat");

    window.location.href = "/upload";
  }

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

        <div
          ref={menuRef}
          className="relative flex items-center gap-4"
        >

          <span className="hidden text-sm text-slate-500 lg:block">
            AMD AI Developer Act II
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-blue-600
            px-2
            py-2
            text-white
            shadow-lg
            transition
            hover:scale-105
            "
          >

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-bold">

              U

            </div>

            <ChevronDown
              size={16}
              className={`transition ${
                open ? "rotate-180" : ""
              }`}
            />

          </button>

          <AnimatePresence>

            {open && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: .96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: .96,
                }}
                transition={{
                  duration: .18,
                }}
                className="
                absolute
                right-0
                top-14
                w-72
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
                ring-1
                ring-slate-200
                "
              >

                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">

                  <div className="flex items-center gap-3">

                    <UserCircle2 size={38}/>

                    <div>

                      <h3 className="font-bold">

                        Demo User

                      </h3>

                      <p className="text-sm text-blue-100">

                        AMD AI Developer Act II

                      </p>

                    </div>

                  </div>

                </div>

                <div className="p-3">

                  <button
                    onClick={resetDemo}
                    className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    px-4
                    py-3
                    text-left
                    transition
                    hover:bg-red-50
                    hover:text-red-600
                    "
                  >

                    <RotateCcw size={18}/>

                    <div>

                      <p className="font-semibold">

                        Reset Demo

                      </p>

                      <p className="text-xs text-slate-500">

                        Clear uploaded data & chat

                      </p>

                    </div>

                  </button>

                  <button
                    className="
                    mt-2
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    px-4
                    py-3
                    text-left
                    transition
                    hover:bg-slate-100
                    "
                  >

                    <Info size={18}/>

                    <div>

                      <p className="font-semibold">

                        About AI CFO

                      </p>

                      <p className="text-xs text-slate-500">

                        AI-Powered Financial intelligence

                      </p>

                    </div>

                  </button>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </header>
  );
}
