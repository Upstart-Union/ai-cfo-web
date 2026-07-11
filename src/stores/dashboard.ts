import { create } from "zustand";
import type {
  DashboardMetrics,
  ForecastData,
} from "@/types/dashboard";

interface DashboardStore {
  dashboard: DashboardMetrics | null;
  forecast: ForecastData | null;
  dashboardLoading: boolean;

  setDashboard: (
    data: DashboardMetrics
  ) => void;

  setForecast: (
    data: ForecastData
  ) => void;

  setDashboardLoading: (
    loading: boolean
  ) => void;

  clearDashboard: () => void;
}

export const useDashboardStore =
  create<DashboardStore>((set) => ({
    dashboard: null,
    forecast: null,
    dashboardLoading: false,

    setDashboard: (data) =>
      set({
        dashboard: data,
      }),

    setForecast: (data) =>
      set({
        forecast: data,
      }),

    setDashboardLoading: (
      loading
    ) =>
      set({
        dashboardLoading: loading,
      }),

    clearDashboard: () =>
      set({
        dashboard: null,
        forecast: null,
        dashboardLoading: false,
      }),
  }));
