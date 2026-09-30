# GeoContentGapsResponse

## Example Usage

```typescript
import { GeoContentGapsResponse } from "@usenotra/sdk/models";

let value: GeoContentGapsResponse = {
  promptGaps: [],
  searchGaps: [],
  aiSearchGaps: [
    {
      id: "<id>",
      query: "<value>",
      variants: [],
      prompts: [
        "<value 1>",
      ],
      engines: [
        "<value 1>",
        "<value 2>",
      ],
      searches: 7818.59,
      ownMentionRate: 2024.28,
      competitors: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      discoveredCompetitors: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      opportunity: 1635.91,
      brief: {
        briefId: "<id>",
        status: "draft",
        postId: "<id>",
        workingTitle: null,
        publishedAt: "<value>",
        baseline: {
          mentionedEngines: 4088.83,
          totalEngines: 2875.45,
        },
        rescanned: false,
      },
    },
  ],
  hasScanData: true,
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
| `promptGaps`                                                                                             | [models.PromptGap](../models/prompt-gap.md)[]                                                            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `searchGaps`                                                                                             | [models.SearchGap](../models/search-gap.md)[]                                                            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `aiSearchGaps`                                                                                           | [models.AiSearchGap](../models/ai-search-gap.md)[]                                                       | :heavy_check_mark:                                                                                       | Web searches AI engines run across your scans where you are neither cited nor mentioned in most answers. |
| `hasScanData`                                                                                            | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | False until the project has at least one scan result.                                                    |
| `organization`                                                                                           | [models.GeoContentGapsResponseOrganization](../models/geo-content-gaps-response-organization.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |