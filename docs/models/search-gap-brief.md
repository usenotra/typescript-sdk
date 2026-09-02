# SearchGapBrief

## Example Usage

```typescript
import { SearchGapBrief } from "@usenotra/sdk/models";

let value: SearchGapBrief = {
  briefId: "<id>",
  status: "writing",
  postId: "<id>",
  workingTitle: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `briefId`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `status`                                                 | [models.SearchGapStatus](../models/search-gap-status.md) | :heavy_check_mark:                                       | N/A                                                      |
| `postId`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `workingTitle`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |