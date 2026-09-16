# GeoChangesResponse

## Example Usage

```typescript
import { GeoChangesResponse } from "@usenotra/sdk/models";

let value: GeoChangesResponse = {
  previousScan: {
    id: "<id>",
    finishedAt: "<value>",
  },
  currentScan: {
    id: "<id>",
    finishedAt: "<value>",
  },
  summary: {
    gained: 871027,
    lost: 873641,
    positionImproved: 260607,
    positionDropped: 870772,
    citationsAdded: 632733,
    citationsRemoved: 105601,
  },
  events: [
    {
      kind: "citation_added",
      promptId: "<id>",
      prompt: "<value>",
      engine: "<value>",
      previous: {
        mentioned: true,
        position: 7089.79,
      },
      current: {
        mentioned: true,
        position: 629.15,
      },
      competitors: [
        "<value 1>",
        "<value 2>",
      ],
      domains: [
        "<value 1>",
        "<value 2>",
      ],
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

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `previousScan`                                                                          | [models.PreviousScan](../models/previous-scan.md)                                       | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `currentScan`                                                                           | [models.CurrentScan](../models/current-scan.md)                                         | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `summary`                                                                               | [models.GeoChangesResponseSummary](../models/geo-changes-response-summary.md)           | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `events`                                                                                | [models.GeoChangesResponseEvent](../models/geo-changes-response-event.md)[]             | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `organization`                                                                          | [models.GeoChangesResponseOrganization](../models/geo-changes-response-organization.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |