# GeoPersonaActivityResponse

## Example Usage

```typescript
import { GeoPersonaActivityResponse } from "@usenotra/sdk/models";

let value: GeoPersonaActivityResponse = {
  from: "<value>",
  to: "<value>",
  points: [
    {
      personaId: "<id>",
      snapshotVersion: "<value>",
      day: "<value>",
      lastCheckedAt: "<value>",
      checks: 269783,
      mentions: 722273,
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `to`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `points`                                                                                                 | [models.GeoPersonaActivityResponsePoint](../models/geo-persona-activity-response-point.md)[]             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organization`                                                                                           | [models.GeoPersonaActivityResponseOrganization](../models/geo-persona-activity-response-organization.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |