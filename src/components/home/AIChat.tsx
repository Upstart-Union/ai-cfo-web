"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User, Send } from "lucide-react";

import { sendMessage } from "@/api/chat";
import { useDashboardStore } from "@/stores/dashboard";

import { useChatStore } from "@/stores/chat";

export default function AIChat() {
  const dashboard = useDashboardStore(
    (state) => state.dashboard
  );

  const [message, setMessage] = useState("");

  const history = useChatStore((state) => state.history);
  const addMessage = useChatStore((state) => state.addMessage);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history, loading]);

  async function handleSend(
    quickPrompt?: string
  ) {

    const text =
      quickPrompt ?? message;

    if (!text.trim() || loading)
      return;

    const userMessage = text;

    addMessage({
      role: "user",
      text: userMessage,
    });

    if (!quickPrompt) {
      setMessage("");
    }
    setLoading(true);

    try {
      const result = await sendMessage(
        userMessage,
        dashboard
      );

      addMessage({
        role: "assistant",
        text: result.answer,
      });
    } catch {
      addMessage({
        role: "assistant",
        text: "Unable to contact AI CFO.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
      <section
      className="
      overflow-hidden
      rounded-[36px]
      border
      border-slate-200/70
      bg-white/90
      backdrop-blur-xl
      shadow-[0_25px_70px_rgba(15,23,42,0.08)]
      "
      >

      <div className="
      flex
      items-center
      justify-between
      bg-gradient-to-r
      from-slate-900
      via-blue-900
      to-cyan-700
      px-8
      py-7
      text-white
      ">

        <div>

          <h2 className="text-4xl font-black">

            AI CFO Assistant

          </h2>

          <p className="mt-2 text-blue-100">

            Your executive financial advisor powered by Artificial Intelligence

          </p>

        </div>

        <div className="rounded-full
        border
        border-emerald-400/20
        bg-emerald-500/15
        px-5
        py-2.5
        backdrop-blur-xl">

          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"/>

            <span className="font-semibold text-emerald-200">

              Online

            </span>

          </div>

        </div>

      </div>

      <div className="
      h-[560px]
      overflow-y-auto
      bg-gradient-to-b
      from-slate-50
      to-white
      px-8
      py-8
      ">

      {history.length === 0 ? (

        <div className="
        flex
        min-h-full
        flex-col
        items-center
        justify-start
        pt-8
        pb-8
        ">

            
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">

            <Bot size={44}/>

          </div>

          <h2 className="text-3xl font-bold">

            AI CFO is Ready

          </h2>

          <p className="mt-3 max-w-xl text-center text-slate-500">

            Ask anything about your financial report,
            profitability, forecasts, expenses,
            risks or business growth.

          </p>

          <div className="mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title:"Revenue Analysis",
                prompt:"Explain my revenue performance.",
              },
              {
                title:"Profit Margin",
                prompt:"How can I improve profit margin?",
              },
              {
                title:"Financial Risks",
                prompt:"Identify my biggest financial risks.",
              },
              {
                title:"Growth Opportunities",
                prompt:"Suggest growth opportunities.",
              },
              {
                title:"Financial Health",
                prompt:"Analyze my financial health.",
              },
              {
                title:"Reduce Expenses",
                prompt:"Recommend ways to reduce expenses.",
              },
            ].map((item)=>(

              <button

                key={item.title}

                onClick={()=>
                  handleSend(item.prompt)
                }

                className="
                rounded-3xl
                border
                border-transparent
                bg-white
                p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-xl
                "

              >

                <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3">

                  ✨

                </div>

                <h3 className="font-bold">

                  {item.title}

                </h3>

                <p className="mt-2 text-sm text-slate-500">

                  {item.prompt}

                </p>

              </button>

            ))}

          </div>


        </div>

      ) : (

        <div className="space-y-6">

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
                  className={`max-w-[80%] rounded-3xl px-6 py-5 ${
                    item.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
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

                <div className="rounded-3xl bg-white px-6 py-5 shadow-lg">
                  <p className="mb-3 text-sm font-semibold text-slate-500">

                  Thinking...

                  </p>

                  <div className="flex gap-2">

                    <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:150ms]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]"></div>

                  </div>

                </div>

              </div>

            )}

            <div ref={bottomRef}/>

        </div>

      )}

        <div ref={bottomRef} />

      </div>

      <div
      className="
      bg-white
      px-8
      pb-8
      pt-4
      "
      >

        <div
        className="
        flex
        items-center
        gap-4
        rounded-3xl
        bg-slate-50
        p-3
        shadow-inner
        "
        >

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
            className="
              flex-1
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-6
              py-4
              text-lg
              shadow-inner
              transition-all
              focus:border-blue-500
              bg-gradient-to-br
              from-white
              to-slate-50
              focus:ring-4
              focus:ring-blue-100
              focus:outline-none
              "
          />

          <button
            onClick={() => handleSend()}
            disabled={loading}
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            shadow-lg
            transition-all
            hover:scale-105
            hover:shadow-blue-400/40
            disabled:opacity-50
            "
          >

            <Send size={22}/>

          </button>

        </div>

      </div>

    </section>
  );
}
