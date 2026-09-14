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
      citations: 765470,
      visibility: 656263,
      visibilityRate: 4485.01,
      avgPosition: 5178.35,
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
| `engines`                                                                                                      | [models.GeoVisibilityOverviewResponseEngine](../models/geo-visibility-overview-response-engine.md)[]           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organization`                                                                                                 | [models.GeoVisibilityOverviewResponseOrganization](../models/geo-visibility-overview-response-organization.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |