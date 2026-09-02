# GeoAgentReadinessReport

Latest completed report, if any.

## Example Usage

```typescript
import { GeoAgentReadinessReport } from "@usenotra/sdk/models";

let value: GeoAgentReadinessReport = {
  id: "<id>",
  status: "running",
  targetUrl: "https://indelible-extension.net/",
  score: 2393.19,
  scoreLabel: "<value>",
  scoreBreakdown: {
    essential: {
      earned: 8416.39,
      available: 2202.2,
      passing: 4680.52,
      total: 8541.47,
    },
    recommended: {
      earned: 7714.26,
      available: 9243.83,
      passing: 1940.43,
      total: 8803.42,
    },
    bonus: {
      points: 5006.25,
      positiveSignals: 4529.24,
    },
  },
  issues: [],
  eligibleChecks: 739271,
  reportUrl: "https://good-castanet.com/",
  errorMessage: "<value>",
  scannedAt: "<value>",
  createdAt: "1714144347688",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [models.GeoAgentReadinessReportStatus](../models/geo-agent-readiness-report-status.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `targetUrl`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `score`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `scoreLabel`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `scoreBreakdown`                                                                       | [models.ScoreBreakdown](../models/score-breakdown.md)                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `issues`                                                                               | [models.GeoAgentReadinessReportIssue](../models/geo-agent-readiness-report-issue.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `eligibleChecks`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `reportUrl`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `errorMessage`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `scannedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |