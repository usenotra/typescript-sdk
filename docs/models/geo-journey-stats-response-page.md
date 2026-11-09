# GeoJourneyStatsResponsePage

## Example Usage

```typescript
import { GeoJourneyStatsResponsePage } from "@usenotra/sdk/models";

let value: GeoJourneyStatsResponsePage = {
  path: "/boot/defaults",
  journeys: 194932,
  previousJourneys: 238998,
  entries: 995916,
  lastSeenAt: null,
  daily: [],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `path`                                        | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `journeys`                                    | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `previousJourneys`                            | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `entries`                                     | *number*                                      | :heavy_check_mark:                            | Journeys whose first fetch was this page.     |
| `lastSeenAt`                                  | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `daily`                                       | [models.PageDaily](../models/page-daily.md)[] | :heavy_check_mark:                            | N/A                                           |