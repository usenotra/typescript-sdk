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
  ownMentionRate: 6874.82,
  engineCoverage: 7537.17,
  opportunity: 8031.63,
  won: false,
  brief: {
    briefId: "<id>",
    status: "completed",
    postId: "<id>",
    workingTitle: "<value>",
    publishedAt: null,
    baseline: {
      mentionedEngines: 6893.36,
      totalEngines: 5569.04,
    },
    rescanned: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `prompt`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `title`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `engines`                                              | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |
| `mentionedEngines`                                     | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |
| `competitors`                                          | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |
| `discoveredCompetitors`                                | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |
| `ownMentionRate`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `engineCoverage`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `opportunity`                                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `won`                                                  | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `brief`                                                | [models.PromptGapBrief](../models/prompt-gap-brief.md) | :heavy_check_mark:                                     | N/A                                                    |