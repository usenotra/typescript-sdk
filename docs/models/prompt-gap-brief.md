# PromptGapBrief

## Example Usage

```typescript
import { PromptGapBrief } from "@usenotra/sdk/models";

let value: PromptGapBrief = {
  briefId: "<id>",
  status: "approved",
  postId: "<id>",
  workingTitle: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `briefId`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `status`                                                 | [models.PromptGapStatus](../models/prompt-gap-status.md) | :heavy_check_mark:                                       | N/A                                                      |
| `postId`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `workingTitle`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |