# ListGeoCompetitorsResponse

## Example Usage

```typescript
import { ListGeoCompetitorsResponse } from "@usenotra/sdk/models";

let value: ListGeoCompetitorsResponse = {
  competitors: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `competitors`                                                                                            | [models.GeoCompetitor](../models/geo-competitor.md)[]                                                    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organization`                                                                                           | [models.ListGeoCompetitorsResponseOrganization](../models/list-geo-competitors-response-organization.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |