import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {
  DashboardMetrics,
  ForecastData,
} from "@/types/dashboard";

export interface AIRecommendation {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
}

interface DashboardStore {
  dashboard: DashboardMetrics | null;
  forecast: ForecastData | null;
  summary: string | null;
  recommendations: AIRecommendation[];
  dashboardLoading: boolean;

  setDashboard: (
    data: DashboardMetrics
  ) => void;

  setForecast: (
    data: ForecastData
  ) => void;

  setSummary: (
    summary: string
  ) => void;

  setRecommendations: (
    recommendations: AIRecommendation[]
  ) => void;

  setDashboardLoading: (
    loading: boolean
  ) => void;

  clearDashboard: () => void;
}

export const useDashboardStore =
  create<DashboardStore>()(
    persist(
      (set) => ({
        dashboard: null,
        forecast: null,
        summary: null,
        recommendations: [],
        dashboardLoading: false,

        setDashboard: (dashboard) =>
          set({
            dashboard,
          }),

        setForecast: (forecast) =>
          set({
            forecast,
          }),

        setSummary: (summary) =>
          set({
            summary,
          }),

        setRecommendations: (
          recommendations
        ) =>
          set({
            recommendations,
          }),

        setDashboardLoading: (
          dashboardLoading
        ) =>
          set({
            dashboardLoading,
          }),

        clearDashboard: () =>
          set({
            dashboard: null,
            forecast: null,
            summary: null,
            recommendations: [],
            dashboardLoading: false,
          }),
      }),
      {
        name: "ai-cfo-dashboard",
      }
    )
  );