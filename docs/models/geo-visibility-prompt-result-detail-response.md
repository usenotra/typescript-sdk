# GeoVisibilityPromptResultDetailResponse

## Example Usage

```typescript
import { GeoVisibilityPromptResultDetailResponse } from "@usenotra/sdk/models";

let value: GeoVisibilityPromptResultDetailResponse = {
  result: {
    promptId: "<id>",
    engine: "<value>",
    prompt: "<value>",
    answer: "<value>",
    mentioned: false,
    ownedSourceCited: true,
    position: 795040,
    sentiment: null,
    competitors: [],
    excerpt: "<value>",
    searchQueries: [
      "<value 1>",
      "<value 2>",
    ],
    sources: [],
    lastCheckedAt: "<value>",
    finishReason: "<value>",
    promptTokens: 571380,
    outputTokens: 711808,
    reasoningTokens: 23200,
    truncated: true,
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                             | [models.GeoVisibilityPromptResultDetailResponseResult](../models/geo-visibility-prompt-result-detail-response-result.md)             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `organization`                                                                                                                       | [models.GeoVisibilityPromptResultDetailResponseOrganization](../models/geo-visibility-prompt-result-detail-response-organization.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |