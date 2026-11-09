# Import

## Example Usage

```typescript
import { Import } from "@usenotra/sdk/models";

let value: Import = {
  id: "<id>",
  projectId: "<id>",
  provider: "cloudflare",
  kind: "web",
  sourceLabel: "<value>",
  host: "alive-word.name",
  status: "completed",
  startDay: "<value>",
  endDay: "<value>",
  cutoffDay: "<value>",
  chunksTotal: 932427,
  chunksDone: 102972,
  pageviewsImported: 694337,
  rowsWritten: 655181,
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
  createdAt: "1713608925840",
  completedAt: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `provider`                                                                                         | [models.GeoAnalyticsImportsResponseProvider](../models/geo-analytics-imports-response-provider.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `kind`                                                                                             | [models.GeoAnalyticsImportsResponseKind](../models/geo-analytics-imports-response-kind.md)         | :heavy_check_mark:                                                                                 | web: page views; geo: AI crawler requests.                                                         |
| `sourceLabel`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `host`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.GeoAnalyticsImportsResponseStatus](../models/geo-analytics-imports-response-status.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `startDay`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `endDay`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `cutoffDay`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | First day of native tracking; imports stop before it.                                              |
| `chunksTotal`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `chunksDone`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pageviewsImported`                                                                                | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rowsWritten`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `capabilities`                                                                                     | [models.Capabilities](../models/capabilities.md)                                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `lastError`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `retryAt`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `completedAt`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |