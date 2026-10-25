# PromptGap

## Example Usage

```typescript
import { PromptGap } from "@usenotra/sdk/models";

let value: PromptGap = {
  id: "<id>",
  prompt: "<value>",
  title: null,
  engines: [
    "<value 1>",
    "<value 2>",
  ],
  mentionedEngines: [
    "<value 1>",
  ],
  competitors: [
    "<value 1>",
    "<value 2>",
  ],
  discoveredCompetitors: [
    "<value 1>",
    "<value 2>",
  ],
  searchQueries: [
    "<value 1>",
    "<value 2>",
  ],
  ownMentionRate: 7537.17,
  engineCoverage: 8031.63,
  opportunity: 5932.68,
  won: false,
  brief: {
    briefId: "<id>",
    status: "completed",
    postId: "<id>",
    workingTitle: null,
    publishedAt: "<value>",
    baseline: {
      mentionedEngines: 6893.36,
      totalEngines: 5569.04,
    },
    rescanned: true,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `prompt`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `title`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `engines`                                                | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `mentionedEngines`                                       | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `competitors`                                            | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `discoveredCompetitors`                                  | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `searchQueries`                                          | *string*[]                                               | :heavy_check_mark:                                       | Web searches AI engines ran while answering this prompt. |
| `ownMentionRate`                                         | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `engineCoverage`                                         | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `opportunity`                                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `won`                                                    | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `brief`                                                  | [models.PromptGapBrief](../models/prompt-gap-brief.md)   | :heavy_check_mark:                                       | N/A                                                      |