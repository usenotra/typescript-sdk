# GeoAnalyticsImportsResponse

## Example Usage

```typescript
import { GeoAnalyticsImportsResponse } from "@usenotra/sdk/models";

let value: GeoAnalyticsImportsResponse = {
  imports: [
    {
      id: "<id>",
      projectId: "<id>",
      provider: "plausible",
      kind: "web",
      sourceLabel: "<value>",
      host: "dirty-premise.biz",
      status: "pending",
      startDay: "<value>",
      endDay: "<value>",
      cutoffDay: "<value>",
      chunksTotal: 841464,
      chunksDone: 476107,
      pageviewsImported: 842137,
      rowsWritten: 584803,
      capabilities: {
        visitors: true,
        visits: true,
        bounces: true,
        utm: false,
        entryPages: false,
        sampled: false,
      },
      lastError: "<value>",
      retryAt: "<value>",
      createdAt: "1709984405620",
      completedAt: "<value>",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `imports`                                                                                                  | [models.Import](../models/import.md)[]                                                                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organization`                                                                                             | [models.GeoAnalyticsImportsResponseOrganization](../models/geo-analytics-imports-response-organization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |