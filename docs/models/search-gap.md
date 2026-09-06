# SearchGap

## Example Usage

```typescript
import { SearchGap } from "@usenotra/sdk/models";

let value: SearchGap = {
  id: "<id>",
  prompt: "<value>",
  title: "<value>",
  impressions: 4950.69,
  clicks: 8891.73,
  position: 5286.74,
  queries: [
    {
      query: "<value>",
      clicks: 5702.5,
      impressions: 9557,
      position: 2495.14,
    },
  ],
  brief: {
    briefId: "<id>",
    status: "draft",
    postId: "<id>",
    workingTitle: "<value>",
    publishedAt: "<value>",
    baseline: {
      mentionedEngines: 4703.46,
      totalEngines: 8045.94,
    },
    rescanned: true,
  },
  recommendation: {
    action: "update",
    reason: "<value>",
    targets: [
      {
        kind: "post",
        id: "<id>",
        url: "https://subdued-plumber.biz/",
        title: "<value>",
        score: 8990.31,
      },
    ],
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
| `clicks`                                               | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `position`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `queries`                                              | [models.Query](../models/query.md)[]                   | :heavy_check_mark:                                     | N/A                                                    |
| `brief`                                                | [models.SearchGapBrief](../models/search-gap-brief.md) | :heavy_check_mark:                                     | N/A                                                    |
| `recommendation`                                       | [models.Recommendation](../models/recommendation.md)   | :heavy_check_mark:                                     | N/A                                                    |