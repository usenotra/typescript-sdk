# GeoProjectResponse

## Example Usage

```typescript
import { GeoProjectResponse } from "@usenotra/sdk/models";

let value: GeoProjectResponse = {
  project: {
    id: "<id>",
    name: "<value>",
    brandSettingsId: "<id>",
    createdAt: "1729653210687",
  },
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
| `project`                                                                               | [models.GeoProject](../models/geo-project.md)                                           | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `organization`                                                                          | [models.GeoProjectResponseOrganization](../models/geo-project-response-organization.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |