# ListGeoProjectsResponse

## Example Usage

```typescript
import { ListGeoProjectsResponse } from "@usenotra/sdk/models";

let value: ListGeoProjectsResponse = {
  projects: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projects`                                                                                         | [models.GeoProject](../models/geo-project.md)[]                                                    | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organization`                                                                                     | [models.ListGeoProjectsResponseOrganization](../models/list-geo-projects-response-organization.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |