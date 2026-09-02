# GeoTrafficOverviewResponse

## Example Usage

```typescript
import { GeoTrafficOverviewResponse } from "@usenotra/sdk/models";

let value: GeoTrafficOverviewResponse = {
  configured: true,
  totals: {
    crawler: 247350,
    aiReferral: 353722,
  },
  sources: [],
  points: [
    {
      day: "<value>",
      visitorType: "human",
      source: "<value>",
      visits: 431565,
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

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                          | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | False when the traffic backend is not configured for this deployment; the payload is then empty rather than an error. |
| `totals`                                                                                                              | [models.Totals](../models/totals.md)                                                                                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `sources`                                                                                                             | [models.GeoTrafficOverviewResponseSource](../models/geo-traffic-overview-response-source.md)[]                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `points`                                                                                                              | [models.GeoTrafficOverviewResponsePoint](../models/geo-traffic-overview-response-point.md)[]                          | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `organization`                                                                                                        | [models.GeoTrafficOverviewResponseOrganization](../models/geo-traffic-overview-response-organization.md)              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |