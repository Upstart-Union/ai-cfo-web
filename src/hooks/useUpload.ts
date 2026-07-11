"use client";

import { useState } from "react";

import { uploadFinancialReport } from "@/api/upload";
import { generateForecast } from "@/api/forecast";
import { useDashboardStore } from "@/stores/dashboard";

export function useUpload() {
  const [loading, setLoading] = useState(false);

  const setDashboard =
    useDashboardStore((state) => state.setDashboard);

  const setForecast =
    useDashboardStore((state) => state.setForecast);

  const setDashboardLoading =
    useDashboardStore(
      (state) => state.setDashboardLoading
    );

  async function upload(file: File) {
    setLoading(true);
    setDashboardLoading(true);

    try {
      const result =
        await uploadFinancialReport(file);

      if (result.success) {
        setDashboard(result.dashboard);

        const forecast =
          await generateForecast(
            result.dashboard
          );

        if (forecast.success) {
          setForecast(
            forecast.forecast
          );
        }
      }

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
      setDashboardLoading(false);
    }
  }

  return {
    upload,
    loading,
  };
}
