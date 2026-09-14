# PromptGapBrief

## Example Usage

```typescript
import { PromptGapBrief } from "@usenotra/sdk/models";

let value: PromptGapBrief = {
  briefId: "<id>",
  status: "approved",
  postId: "<id>",
  workingTitle: "<value>",
  publishedAt: "<value>",
  baseline: {
    mentionedEngines: 6893.36,
    totalEngines: 5569.04,
  },
  rescanned: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `briefId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `status`                                                     | [models.PromptGapStatus](../models/prompt-gap-status.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `postId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `workingTitle`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `publishedAt`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `baseline`                                                   | [models.PromptGapBaseline](../models/prompt-gap-baseline.md) | :heavy_check_mark:                                           | N/A                                                          |
| `rescanned`                                                  | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |