# GeoJourneyStatsResponse

## Example Usage

```typescript
import { GeoJourneyStatsResponse } from "@usenotra/sdk/models";

let value: GeoJourneyStatsResponse = {
  configured: true,
  sources: [],
  pages: [
    {
      path: "/var/log",
      journeys: 940659,
      previousJourneys: 121940,
      entries: 190407,
      lastSeenAt: "<value>",
      daily: [],
    },
  ],
  totalPages: 376761,
  previousTotalPages: 471167,
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
| `sources`                                                                                                               | [models.GeoJourneyStatsResponseSource](../models/geo-journey-stats-response-source.md)[]                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `pages`                                                                                                                 | [models.GeoJourneyStatsResponsePage](../models/geo-journey-stats-response-page.md)[]                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `totalPages`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `previousTotalPages`                                                                                                    | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `organization`                                                                                                          | [models.GeoJourneyStatsResponseOrganization](../models/geo-journey-stats-response-organization.md)                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |