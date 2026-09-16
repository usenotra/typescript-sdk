# GeoSentimentResponseEngine

## Example Usage

```typescript
import { GeoSentimentResponseEngine } from "@usenotra/sdk/models";

let value: GeoSentimentResponseEngine = {
  totalChecks: 405594,
  mentions: 422137,
  positive: 88832,
  neutral: 859300,
  negative: 123481,
  lastCheckedAt: "<value>",
  score: 851.04,
  classifiedMentions: 464054,
  unknownMentions: 944267,
  notMentioned: 778239,
  positiveShare: 7477.64,
  neutralShare: 8599.96,
  negativeShare: 2711.8,
  classificationCoverage: 5789.82,
  engine: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `totalChecks`            | *number*                 | :heavy_check_mark:       | N/A                      |
| `mentions`               | *number*                 | :heavy_check_mark:       | N/A                      |
| `positive`               | *number*                 | :heavy_check_mark:       | N/A                      |
| `neutral`                | *number*                 | :heavy_check_mark:       | N/A                      |
| `negative`               | *number*                 | :heavy_check_mark:       | N/A                      |
| `lastCheckedAt`          | *string*                 | :heavy_check_mark:       | N/A                      |
| `score`                  | *number*                 | :heavy_check_mark:       | N/A                      |
| `classifiedMentions`     | *number*                 | :heavy_check_mark:       | N/A                      |
| `unknownMentions`        | *number*                 | :heavy_check_mark:       | N/A                      |
| `notMentioned`           | *number*                 | :heavy_check_mark:       | N/A                      |
| `positiveShare`          | *number*                 | :heavy_check_mark:       | N/A                      |
| `neutralShare`           | *number*                 | :heavy_check_mark:       | N/A                      |
| `negativeShare`          | *number*                 | :heavy_check_mark:       | N/A                      |
| `classificationCoverage` | *number*                 | :heavy_check_mark:       | N/A                      |
| `engine`                 | *string*                 | :heavy_check_mark:       | N/A                      |