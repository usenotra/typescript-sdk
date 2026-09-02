# ListGeoPromptsResponse

## Example Usage

```typescript
import { ListGeoPromptsResponse } from "@usenotra/sdk/models";

let value: ListGeoPromptsResponse = {
  configured: false,
  prompts: [
    {
      id: "<id>",
      prompt: "<value>",
      enabled: false,
      source: "auto",
      createdAt: "1721079456930",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `configured`                                                                                     | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `prompts`                                                                                        | [models.GeoPrompt](../models/geo-prompt.md)[]                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [models.ListGeoPromptsResponseOrganization](../models/list-geo-prompts-response-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |