"use client";

import { useState } from "react";

import { uploadFinancialReport } from "@/api/upload";
import { generateForecast } from "@/api/forecast";
import { generateSummary } from "@/api/summary";

import { useDashboardStore } from "@/stores/dashboard";

export function useUpload() {
  const [loading, setLoading] = useState(false);

  const [processingStep, setProcessingStep] =
    useState(-1);

  const setDashboard =
    useDashboardStore((state) => state.setDashboard);

  const setForecast =
    useDashboardStore((state) => state.setForecast);

  const setSummary =
    useDashboardStore((state) => state.setSummary);

  const setRecommendations =
    useDashboardStore(
      (state) => state.setRecommendations
    );

  const setDashboardLoading =
    useDashboardStore(
      (state) => state.setDashboardLoading
    );

  async function upload(file: File) {
    setLoading(true);
    setDashboardLoading(true);

    try {

      // Step 0
      setProcessingStep(0);

      const result =
        await uploadFinancialReport(file);

      if (result.success) {

        setDashboard(result.dashboard);

        // Step 1
        setProcessingStep(1);

        await new Promise((r) =>
          setTimeout(r, 350)
        );

        // Step 2
        setProcessingStep(2);

        const ai =
          await generateSummary(
            result.dashboard
          );

        setSummary(ai.summary);

        setRecommendations(
          ai.recommendations
        );

        await new Promise((r) =>
          setTimeout(r, 350)
        );

        // Step 3
        setProcessingStep(3);

        const forecast =
          await generateForecast(
            result.dashboard
          );

        if (forecast.success) {
          setForecast(
            forecast.forecast
          );
        }

        await new Promise((r) =>
          setTimeout(r, 350)
        );

        // Step 4
        setProcessingStep(4);

        await new Promise((r) =>
          setTimeout(r, 350)
        );

        // Step 5
        setProcessingStep(5);

        await new Promise((r) =>
          setTimeout(r, 700)
        );
      }

      return result;

    } catch (error) {

      console.error(error);
      throw error;

    } finally {

      setLoading(false);
      setDashboardLoading(false);

      setTimeout(() => {
        setProcessingStep(-1);
      }, 300);

    }
  }

  return {
    upload,
    loading,
    processingStep,
  };
}