# GeoVisibilityLanguageShareResponse

## Example Usage

```typescript
import { GeoVisibilityLanguageShareResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityLanguageShareResponse = {
  configured: false,
  points: [
    {
      language: "<value>",
      checks: 732321,
      mentions: 315317,
      mentionRate: 4120.93,
      avgPosition: 8610.52,
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

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                              | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `points`                                                                                                                  | [models.GeoVisibilityLanguageShareResponsePoint](../models/geo-visibility-language-share-response-point.md)[]             | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `organization`                                                                                                            | [models.GeoVisibilityLanguageShareResponseOrganization](../models/geo-visibility-language-share-response-organization.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |