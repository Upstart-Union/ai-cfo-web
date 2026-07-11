import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {
  DashboardMetrics,
  ForecastData,
} from "@/types/dashboard";

interface DashboardStore {
  dashboard: DashboardMetrics | null;
  forecast: ForecastData | null;
  summary: string | null;
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
            dashboardLoading: false,
          }),
      }),
      {
        name: "ai-cfo-dashboard",
      }
    )
  );