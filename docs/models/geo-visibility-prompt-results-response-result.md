# GeoVisibilityPromptResultsResponseResult

## Example Usage

```typescript
import { GeoVisibilityPromptResultsResponseResult } from "@usenotra/sdk/models";

let value: GeoVisibilityPromptResultsResponseResult = {
  promptId: "<id>",
  engine: "<value>",
  prompt: "<value>",
  answer: "<value>",
  mentioned: false,
  position: 688696,
  sentiment: "<value>",
  competitors: [
    "<value 1>",
    "<value 2>",
  ],
  excerpt: "<value>",
  searchQueries: [],
  sources: [],
  lastCheckedAt: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `promptId`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `engine`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `prompt`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `answer`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `mentioned`                                                                                                     | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `position`                                                                                                      | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `sentiment`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `competitors`                                                                                                   | *string*[]                                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `excerpt`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `searchQueries`                                                                                                 | *string*[]                                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `sources`                                                                                                       | [models.GeoVisibilityPromptResultsResponseSource](../models/geo-visibility-prompt-results-response-source.md)[] | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `lastCheckedAt`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |