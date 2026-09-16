# GeoVisibilityPromptResultDetailResponseResult

## Example Usage

```typescript
import { GeoVisibilityPromptResultDetailResponseResult } from "@usenotra/sdk/models";

let value: GeoVisibilityPromptResultDetailResponseResult = {
  promptId: "<id>",
  engine: "<value>",
  prompt: "<value>",
  answer: "<value>",
  mentioned: true,
  ownedSourceCited: true,
  position: 59203,
  sentiment: "<value>",
  competitors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  excerpt: "<value>",
  searchQueries: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  sources: [
    {
      title: "<value>",
      url: "https://tidy-colonialism.com/",
      domain: "legal-forager.biz",
    },
  ],
  lastCheckedAt: "<value>",
  finishReason: "<value>",
  promptTokens: 806479,
  outputTokens: 344965,
  reasoningTokens: 608592,
  truncated: false,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `promptId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `engine`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `prompt`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `answer`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `mentioned`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `ownedSourceCited`                                                                                                         | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `position`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `sentiment`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `competitors`                                                                                                              | *string*[]                                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `excerpt`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `searchQueries`                                                                                                            | *string*[]                                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `sources`                                                                                                                  | [models.GeoVisibilityPromptResultDetailResponseSource](../models/geo-visibility-prompt-result-detail-response-source.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `lastCheckedAt`                                                                                                            | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `finishReason`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `promptTokens`                                                                                                             | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `outputTokens`                                                                                                             | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `reasoningTokens`                                                                                                          | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `truncated`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |