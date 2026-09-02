# GeoAgentReadinessResponse

## Example Usage

```typescript
import { GeoAgentReadinessResponse } from "@usenotra/sdk/models";

let value: GeoAgentReadinessResponse = {
  targetUrl: "https://jubilant-sideboard.biz/",
  report: {
    id: "<id>",
    status: "completed",
    targetUrl: "https://frivolous-giggle.biz/",
    score: 5881.32,
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
    eligibleChecks: 33355,
    reportUrl: "https://watery-innovation.name/",
    errorMessage: "<value>",
    scannedAt: "<value>",
    createdAt: "1709250722140",
  },
  scan: null,
  history: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `targetUrl`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `report`                                                                                               | [models.GeoAgentReadinessReport](../models/geo-agent-readiness-report.md)                              | :heavy_check_mark:                                                                                     | Latest completed report, if any.                                                                       |
| `scan`                                                                                                 | [models.GeoAgentReadinessReport](../models/geo-agent-readiness-report.md)                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `history`                                                                                              | [models.History](../models/history.md)[]                                                               | :heavy_check_mark:                                                                                     | Completed scans, oldest first.                                                                         |
| `organization`                                                                                         | [models.GeoAgentReadinessResponseOrganization](../models/geo-agent-readiness-response-organization.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |