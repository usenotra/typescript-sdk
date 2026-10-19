# AiSearchGapBrief

## Example Usage

```typescript
import { AiSearchGapBrief } from "@usenotra/sdk/models";

let value: AiSearchGapBrief = {
  briefId: "<id>",
  status: "draft",
  postId: "<id>",
  workingTitle: "<value>",
  publishedAt: "<value>",
  baseline: {
    mentionedEngines: 4088.83,
    totalEngines: 2875.45,
  },
  rescanned: true,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `briefId`                                                         | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `status`                                                          | [models.AiSearchGapStatus](../models/ai-search-gap-status.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `postId`                                                          | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `workingTitle`                                                    | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `publishedAt`                                                     | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `baseline`                                                        | [models.AiSearchGapBaseline](../models/ai-search-gap-baseline.md) | :heavy_check_mark:                                                | N/A                                                               |
| `rescanned`                                                       | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               |