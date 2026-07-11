"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User, Send } from "lucide-react";

import { sendMessage } from "@/api/chat";
import { useDashboardStore } from "@/stores/dashboard";

export default function AIChat() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const [message, setMessage] = useState("");

  const [history, setHistory] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history, loading]);

  async function handleSend() {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setHistory((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const result = await sendMessage(
        userMessage,
        dashboard
      );

      setHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          text: result.answer,
        },
      ]);
    } catch {
      setHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Unable to contact AI CFO.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b px-6 py-5">

        <h2 className="text-2xl font-bold">
          AI CFO Assistant
        </h2>

        <p className="mt-1 text-slate-500">
          Powered by Gemini AI
        </p>

      </div>

      <div className="h-[500px] overflow-y-auto bg-slate-50 p-6">

        {history.length === 0 && (

          <div className="rounded-2xl border bg-white p-5">

            <p className="font-semibold">
              Suggested Questions
            </p>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• How is my business performing?</li>
              <li>• How can I improve profit?</li>
              <li>• Should I reduce expenses?</li>
              <li>• Analyze my financial health.</li>
            </ul>

          </div>

        )}

        {history.map((item, index) => (

          <div
            key={index}
            className={`mb-6 flex ${
              item.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {item.role === "assistant" && (
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                <Bot size={18} />
              </div>
            )}

            <div
              className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                item.role === "user"
                  ? "bg-blue-600 text-white"
                  : "border bg-white"
              }`}
            >
              {item.role === "assistant" ? (
                <article className="prose prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.text}
                  </ReactMarkdown>
                </article>
              ) : (
                item.text
              )}
            </div>

            {item.role === "user" && (
              <div className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white">
                <User size={18} />
              </div>
            )}

          </div>

        ))}

        {loading && (

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <Bot size={18} />
            </div>

            <div className="rounded-2xl border bg-white px-5 py-4">

              <div className="flex gap-2">

                <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:150ms]"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]"></div>

              </div>

            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      <div className="border-t bg-white p-5">

        <div className="flex gap-3">

          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask AI CFO anything..."
            className="flex-1 rounded-xl border px-4 py-3 focus:border-blue-500 focus:outline-none"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-5 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </section>
  );
}
