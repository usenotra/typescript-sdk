# GeoSentimentResponse

## Example Usage

```typescript
import { GeoSentimentResponse } from "@usenotra/sdk/models";

let value: GeoSentimentResponse = {
  configured: true,
  summary: {
    totalChecks: 893382,
    mentions: 747884,
    positive: 191746,
    neutral: 741398,
    negative: 731974,
    lastCheckedAt: "<value>",
    score: 4256.35,
    classifiedMentions: 731217,
    unknownMentions: 577449,
    notMentioned: 491364,
    positiveShare: 3872.39,
    neutralShare: 3284.03,
    negativeShare: 4068.93,
    classificationCoverage: 2148.28,
  },
  engines: [
    {
      totalChecks: 791097,
      mentions: 707325,
      positive: 456483,
      neutral: 42163,
      negative: 50672,
      lastCheckedAt: "<value>",
      score: 702.09,
      classifiedMentions: 172583,
      unknownMentions: 262178,
      notMentioned: 887156,
      positiveShare: 1173.43,
      neutralShare: null,
      negativeShare: 8429.48,
      classificationCoverage: null,
      engine: "<value>",
    },
  ],
  points: [
    {
      totalChecks: 247090,
      mentions: 192513,
      positive: 399778,
      neutral: 481509,
      negative: 599066,
      lastCheckedAt: null,
      score: 4589.65,
      classifiedMentions: 894746,
      unknownMentions: 175559,
      notMentioned: 759369,
      positiveShare: 4453.69,
      neutralShare: 3541.99,
      negativeShare: null,
      classificationCoverage: 6009.28,
      day: "<value>",
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `configured`                                                                                | *true*                                                                                      | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `summary`                                                                                   | [models.GeoSentimentResponseSummary](../models/geo-sentiment-response-summary.md)           | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `engines`                                                                                   | [models.GeoSentimentResponseEngine](../models/geo-sentiment-response-engine.md)[]           | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `points`                                                                                    | [models.GeoSentimentResponsePoint](../models/geo-sentiment-response-point.md)[]             | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `comparison`                                                                                | [models.Comparison](../models/comparison.md)                                                | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `organization`                                                                              | [models.GeoSentimentResponseOrganization](../models/geo-sentiment-response-organization.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |