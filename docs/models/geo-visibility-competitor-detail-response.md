# GeoVisibilityCompetitorDetailResponse

## Example Usage

```typescript
import { GeoVisibilityCompetitorDetailResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityCompetitorDetailResponse = {
  configured: true,
  points: [],
  prompts: [
    {
      promptId: "<id>",
      prompt: "<value>",
      engine: "<value>",
      capturedAt: "<value>",
      mentioned: false,
      position: 153594,
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                                    | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `points`                                                                                                                        | [models.GeoVisibilityCompetitorDetailResponsePoint](../models/geo-visibility-competitor-detail-response-point.md)[]             | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `prompts`                                                                                                                       | [models.Prompt](../models/prompt.md)[]                                                                                          | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `organization`                                                                                                                  | [models.GeoVisibilityCompetitorDetailResponseOrganization](../models/geo-visibility-competitor-detail-response-organization.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |