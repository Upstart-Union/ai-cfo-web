import Navbar from "@/components/common/Navbar";

import AIChat from "@/components/home/AIChat";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-8">

        <AIChat />

      </div>

    </main>
  );
}
