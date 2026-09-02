# GeoVisibilityCompetitorShareResponse

## Example Usage

```typescript
import { GeoVisibilityCompetitorShareResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityCompetitorShareResponse = {
  configured: true,
  points: [],
  timeseries: [
    {
      brand: "<value>",
      day: "<value>",
      mentions: 868961,
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                                  | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `points`                                                                                                                      | [models.GeoVisibilityCompetitorShareResponsePoint](../models/geo-visibility-competitor-share-response-point.md)[]             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `timeseries`                                                                                                                  | [models.Timesery](../models/timesery.md)[]                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `organization`                                                                                                                | [models.GeoVisibilityCompetitorShareResponseOrganization](../models/geo-visibility-competitor-share-response-organization.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |