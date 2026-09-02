# ListGeoContentBriefsResponse

## Example Usage

```typescript
import { ListGeoContentBriefsResponse } from "@usenotra/sdk/models";

let value: ListGeoContentBriefsResponse = {
  briefs: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `briefs`                                                                                                      | [models.GeoContentBriefSummary](../models/geo-content-brief-summary.md)[]                                     | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `organization`                                                                                                | [models.ListGeoContentBriefsResponseOrganization](../models/list-geo-content-briefs-response-organization.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |