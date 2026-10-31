# GeoPromptSuggestion

## Example Usage

```typescript
import { GeoPromptSuggestion } from "@usenotra/sdk/models";

let value: GeoPromptSuggestion = {
  id: "<id>",
  prompt: "<value>",
  title: "<value>",
  source: "search_console",
  keywords: [
    {
      query: "<value>",
      clicks: 7253.57,
      impressions: 7183.2,
      position: 4784.94,
    },
  ],
  createdAt: "1704977094910",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `prompt`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `title`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `source`                                                                      | [models.GeoPromptSuggestionSource](../models/geo-prompt-suggestion-source.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `keywords`                                                                    | [models.Keyword](../models/keyword.md)[]                                      | :heavy_check_mark:                                                            | Search Console queries the suggestion was derived from.                       |
| `createdAt`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |