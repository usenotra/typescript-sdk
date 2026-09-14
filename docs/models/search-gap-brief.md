# SearchGapBrief

## Example Usage

```typescript
import { SearchGapBrief } from "@usenotra/sdk/models";

let value: SearchGapBrief = {
  briefId: "<id>",
  status: "writing",
  postId: "<id>",
  workingTitle: "<value>",
  publishedAt: "<value>",
  baseline: {
    mentionedEngines: 4703.46,
    totalEngines: 8045.94,
  },
  rescanned: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `briefId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `status`                                                     | [models.SearchGapStatus](../models/search-gap-status.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `postId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `workingTitle`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `publishedAt`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `baseline`                                                   | [models.SearchGapBaseline](../models/search-gap-baseline.md) | :heavy_check_mark:                                           | N/A                                                          |
| `rescanned`                                                  | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |