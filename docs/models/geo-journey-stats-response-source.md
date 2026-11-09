# GeoJourneyStatsResponseSource

## Example Usage

```typescript
import { GeoJourneyStatsResponseSource } from "@usenotra/sdk/models";

let value: GeoJourneyStatsResponseSource = {
  source: "<value>",
  visitorType: "crawler",
  journeys: 479329,
  previousJourneys: 678534,
  pages: 514962,
  singleFetch: 634344,
  deepCrawls: 539839,
  lastSeenAt: "<value>",
  daily: [],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `source`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `visitorType`                                                                                     | [models.GeoJourneyStatsResponseVisitorType](../models/geo-journey-stats-response-visitor-type.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `journeys`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `previousJourneys`                                                                                | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `pages`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `singleFetch`                                                                                     | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `deepCrawls`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `lastSeenAt`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `daily`                                                                                           | [models.SourceDaily](../models/source-daily.md)[]                                                 | :heavy_check_mark:                                                                                | N/A                                                                                               |