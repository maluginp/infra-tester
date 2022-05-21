import { makeCounterProvider, makeGaugeProvider, makeHistogramProvider, makeSummaryProvider } from "@willsoto/nestjs-prometheus";

export var PlayersMetrics = [
    makeCounterProvider({
        name: "metric_name",
        help: "metric_help",
    }),
    makeCounterProvider({
        name: "players_calls_counter",
        help: "Counter calls to players resource",
    }),
    makeGaugeProvider({
        name: "players_calls_gauge",
        help: "Gauge calls to players resource",
    }),
    makeHistogramProvider({
        name: 'players_calls_histogram',
        help: 'metric_help',
        buckets: [0.1, 5, 15, 50, 100, 500],
    }),
    makeSummaryProvider({
        name: 'players_calls_summary',
        help: 'metric_help',
        percentiles: [0.01, 0.1, 0.9, 0.99],
    })
];