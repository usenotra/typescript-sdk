# Comparison

## Example Usage

```typescript
import { Comparison } from "@usenotra/sdk/models";

let value: Comparison = {
  current: {
    from: "<value>",
    to: "<value>",
  },
  previous: {
    from: "<value>",
    to: "<value>",
  },
  summary: {
    totalChecks: 440016,
    mentions: 119186,
    positive: 142289,
    neutral: 220935,
    negative: 666056,
    lastCheckedAt: "<value>",
    score: 9481.34,
    classifiedMentions: 8443,
    unknownMentions: 646155,
    notMentioned: 222335,
    positiveShare: 7794.28,
    neutralShare: null,
    negativeShare: 6292.15,
    classificationCoverage: 4323.56,
  },
  points: [],
  delta: 4926.48,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `current`                                                                           | [models.GeoSentimentResponseCurrent](../models/geo-sentiment-response-current.md)   | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `previous`                                                                          | [models.GeoSentimentResponsePrevious](../models/geo-sentiment-response-previous.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `summary`                                                                           | [models.ComparisonSummary](../models/comparison-summary.md)                         | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `points`                                                                            | [models.ComparisonPoint](../models/comparison-point.md)[]                           | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `delta`                                                                             | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |