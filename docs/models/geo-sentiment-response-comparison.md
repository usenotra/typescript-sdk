# GeoSentimentResponseComparison

## Example Usage

```typescript
import { GeoSentimentResponseComparison } from "@usenotra/sdk/models";

let value: GeoSentimentResponseComparison = {
  current: {
    from: "<value>",
    to: "<value>",
  },
  previous: {
    from: "<value>",
    to: "<value>",
  },
  summary: {
    totalChecks: 951935,
    mentions: 439321,
    positive: 491316,
    neutral: 768980,
    negative: 421119,
    lastCheckedAt: "<value>",
    score: 5655.21,
    classifiedMentions: 378920,
    unknownMentions: 442887,
    notMentioned: 453955,
    positiveShare: null,
    neutralShare: 2058.83,
    negativeShare: 793.1,
    classificationCoverage: 1986.12,
  },
  points: [
    {
      totalChecks: 105889,
      mentions: 161446,
      positive: 224728,
      neutral: 191373,
      negative: 911429,
      lastCheckedAt: "<value>",
      score: 3102.25,
      classifiedMentions: 294683,
      unknownMentions: 208053,
      notMentioned: 973998,
      positiveShare: null,
      neutralShare: 1768.45,
      negativeShare: 8143.13,
      classificationCoverage: 4560.96,
      day: "<value>",
    },
  ],
  delta: 1299.8,
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