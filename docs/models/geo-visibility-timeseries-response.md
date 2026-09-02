# GeoVisibilityTimeseriesResponse

## Example Usage

```typescript
import { GeoVisibilityTimeseriesResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityTimeseriesResponse = {
  configured: true,
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `configured`                                                                                                       | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `points`                                                                                                           | [models.GeoVisibilityTimeseriesResponsePoint](../models/geo-visibility-timeseries-response-point.md)[]             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `organization`                                                                                                     | [models.GeoVisibilityTimeseriesResponseOrganization](../models/geo-visibility-timeseries-response-organization.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |