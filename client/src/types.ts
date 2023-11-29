import { Layout } from "react-grid-layout";

export type EventName = "energyConsumption" | "throughput" | "grindingEfficiency";

export type ISummary = {
    title: string;
    value: string;
    timeframe: string;
    change: number;
    compact?: boolean;
    simulation?: boolean;
}

export type IChart = {
    eventName: string;
    color?: string // hex value
    opacity?: string // 2 digit hex value
}

export interface IChartConfig extends IChart {
  id: string;
}

export interface ILayoutConfig extends Layout {
    featured?: boolean
}

export {}