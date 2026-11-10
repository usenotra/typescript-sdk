# GeoWebAnalyticsUtmResponse

## Example Usage

```typescript
import { GeoWebAnalyticsUtmResponse } from "@usenotra/sdk/models";

let value: GeoWebAnalyticsUtmResponse = {
  dimension: "source",
  rows: [
    {
      value: "<value>",
      sessions: 917371,
      previousSessions: 940237,
      visitors: 510253,
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

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `dimension`                                                                                               | [models.Dimension](../models/dimension.md)                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `rows`                                                                                                    | [models.GeoWebAnalyticsUtmResponseRow](../models/geo-web-analytics-utm-response-row.md)[]                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `organization`                                                                                            | [models.GeoWebAnalyticsUtmResponseOrganization](../models/geo-web-analytics-utm-response-organization.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |