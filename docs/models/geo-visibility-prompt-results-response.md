# GeoVisibilityPromptResultsResponse

## Example Usage

```typescript
import { GeoVisibilityPromptResultsResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityPromptResultsResponse = {
  configured: false,
  results: [],
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
| `results`                                                                                                                 | [models.GeoVisibilityPromptResultsResponseResult](../models/geo-visibility-prompt-results-response-result.md)[]           | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `organization`                                                                                                            | [models.GeoVisibilityPromptResultsResponseOrganization](../models/geo-visibility-prompt-results-response-organization.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |