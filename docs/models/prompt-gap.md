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
  competitors: [
    "<value 1>",
  ],
  ownMentionRate: 5253.77,
  engineCoverage: 6129.72,
  opportunity: 6874.82,
  brief: {
    briefId: "<id>",
    status: "failed",
    postId: "<id>",
    workingTitle: "<value>",
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
| `competitors`                                          | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |
| `ownMentionRate`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `engineCoverage`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `opportunity`                                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `brief`                                                | [models.PromptGapBrief](../models/prompt-gap-brief.md) | :heavy_check_mark:                                     | N/A                                                    |