# GeoVisibilityOverviewResponse

## Example Usage

```typescript
import { GeoVisibilityOverviewResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityOverviewResponse = {
  configured: true,
  engines: [
    {
      engine: "<value>",
      checks: 618368,
      mentions: 305464,
      mentionRate: 2139.17,
      avgPosition: 6562.63,
      lastCheckedAt: "<value>",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the analytics backend is configured.                                                                   |
| `engines`                                                                                                      | [models.Engine](../models/engine.md)[]                                                                         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organization`                                                                                                 | [models.GeoVisibilityOverviewResponseOrganization](../models/geo-visibility-overview-response-organization.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |