import { create } from "zustand";
import { persist } from "zustand/middleware";

type Message = {
  role: "user" | "assistant";
  text: string;
};

interface ChatStore {
  history: Message[];
  addMessage: (message: Message) => void;
  clearHistory: () => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      history: [],

      addMessage: (message) =>
        set((state) => ({
          history: [...state.history, message],
        })),

      clearHistory: () =>
        set({ history: [] }),
    }),
    {
      name: "ai-cfo-chat",
    }
  )
);