export interface DashboardMetrics {
  revenue: number;
  expenses: number;
  profit: number;
  profit_margin: number;
}

export interface ForecastData {
  months: string[];
  revenue: number[];
  expenses: number[];
  profit: number[];
}
