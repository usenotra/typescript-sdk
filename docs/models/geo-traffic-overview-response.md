# GeoTrafficOverviewResponse

## Example Usage

```typescript
import { GeoTrafficOverviewResponse } from "@usenotra/sdk/models";

let value: GeoTrafficOverviewResponse = {
  configured: true,
  totals: {
    crawler: 247350,
    cited: 353722,
    aiReferral: 142914,
    conversions: 733378,
  },
  previousConversions: 553154,
  sources: [
    {
      source: "<value>",
      visitorType: "unknown",
      agent: "<value>",
      category: "<value>",
      confidence: "<value>",
      visits: 54700,
      markdownVisits: 946534,
      paths: 343757,
      lastSeenAt: "<value>",
    },
  ],
  points: [
    {
      day: "<value>",
      visitorType: "ai_referral",
      source: "<value>",
      visits: 118264,
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                               | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | False when the traffic backend is not configured for this deployment; the payload is then empty rather than an error.      |
| `totals`                                                                                                                   | [models.Totals](../models/totals.md)                                                                                       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `previousConversions`                                                                                                      | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | Conversions in the previous window of the same length. Null when no conversion paths are set or no comparison data exists. |
| `sources`                                                                                                                  | [models.GeoTrafficOverviewResponseSource](../models/geo-traffic-overview-response-source.md)[]                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `points`                                                                                                                   | [models.GeoTrafficOverviewResponsePoint](../models/geo-traffic-overview-response-point.md)[]                               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `organization`                                                                                                             | [models.GeoTrafficOverviewResponseOrganization](../models/geo-traffic-overview-response-organization.md)                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |