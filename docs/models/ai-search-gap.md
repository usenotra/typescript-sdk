# AiSearchGap

## Example Usage

```typescript
import { AiSearchGap } from "@usenotra/sdk/models";

let value: AiSearchGap = {
  id: "<id>",
  query: "<value>",
  variants: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  prompts: [
    "<value 1>",
  ],
  engines: [],
  searches: 588.52,
  ownMentionRate: 224.54,
  competitors: [
    "<value 1>",
    "<value 2>",
  ],
  discoveredCompetitors: [],
  opportunity: 4117.48,
  brief: null,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `query`                                                     | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `variants`                                                  | *string*[]                                                  | :heavy_check_mark:                                          | N/A                                                         |
| `prompts`                                                   | *string*[]                                                  | :heavy_check_mark:                                          | N/A                                                         |
| `engines`                                                   | *string*[]                                                  | :heavy_check_mark:                                          | N/A                                                         |
| `searches`                                                  | *number*                                                    | :heavy_check_mark:                                          | Scan answers in which an engine ran this web search.        |
| `ownMentionRate`                                            | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `competitors`                                               | *string*[]                                                  | :heavy_check_mark:                                          | N/A                                                         |
| `discoveredCompetitors`                                     | *string*[]                                                  | :heavy_check_mark:                                          | N/A                                                         |
| `opportunity`                                               | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `brief`                                                     | [models.AiSearchGapBrief](../models/ai-search-gap-brief.md) | :heavy_check_mark:                                          | N/A                                                         |