# GeoVisibilityPromptResultSummariesResponse

## Example Usage

```typescript
import { GeoVisibilityPromptResultSummariesResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityPromptResultSummariesResponse = {
  configured: true,
  results: [
    {
      promptId: "<id>",
      engine: "<value>",
      prompt: "<value>",
      mentioned: false,
      ownedSourceCited: false,
      position: 272349,
      sentiment: "<value>",
      competitors: [
        "<value 1>",
        "<value 2>",
      ],
      lastCheckedAt: "<value>",
      checkId: "<id>",
    },
  ],
  nextCursor: "<value>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `configured`                                                                                                                               | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `results`                                                                                                                                  | [models.GeoVisibilityPromptResultSummariesResponseResult](../models/geo-visibility-prompt-result-summaries-response-result.md)[]           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `nextCursor`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `organization`                                                                                                                             | [models.GeoVisibilityPromptResultSummariesResponseOrganization](../models/geo-visibility-prompt-result-summaries-response-organization.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |