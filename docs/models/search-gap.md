# SearchGap

## Example Usage

```typescript
import { SearchGap } from "@usenotra/sdk/models";

let value: SearchGap = {
  id: "<id>",
  prompt: "<value>",
  title: "<value>",
  impressions: 4950.69,
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
| `impressions`                                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `brief`                                                | [models.SearchGapBrief](../models/search-gap-brief.md) | :heavy_check_mark:                                     | N/A                                                    |