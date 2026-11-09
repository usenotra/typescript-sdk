# GeoWebAnalyticsResponse

## Example Usage

```typescript
import { GeoWebAnalyticsResponse } from "@usenotra/sdk/models";

let value: GeoWebAnalyticsResponse = {
  configured: false,
  hosts: [
    {
      host: "glass-numeric.biz",
      siteId: "<id>",
      views: 874674,
    },
  ],
  totals: {
    views: 249130,
    previousViews: 40058,
    visitors: 153268,
    previousVisitors: 383220,
    sessions: 573052,
    previousSessions: 437306,
    engagedSessions: 903662,
    aiVisitors: 576699,
    previousAiVisitors: 564180,
  },
  points: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | False when the analytics backend is not configured for this deployment; the payload is then empty rather than an error. |
| `imported`                                                                                                              | [models.GeoWebAnalyticsResponseImported](../models/geo-web-analytics-response-imported.md)                              | :heavy_minus_sign:                                                                                                      | Latest completed history import. Days up to `until` come from it; native tracking starts the day after.                 |
| `hosts`                                                                                                                 | [models.Host](../models/host.md)[]                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `totals`                                                                                                                | [models.GeoWebAnalyticsResponseTotals](../models/geo-web-analytics-response-totals.md)                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `points`                                                                                                                | [models.GeoWebAnalyticsResponsePoint](../models/geo-web-analytics-response-point.md)[]                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `organization`                                                                                                          | [models.GeoWebAnalyticsResponseOrganization](../models/geo-web-analytics-response-organization.md)                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |