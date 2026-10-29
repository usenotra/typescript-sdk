# ListGeoPromptSuggestionsResponse

## Example Usage

```typescript
import { ListGeoPromptSuggestionsResponse } from "@usenotra/sdk/models";

let value: ListGeoPromptSuggestionsResponse = {
  suggestions: [
    {
      id: "<id>",
      prompt: "<value>",
      title: "<value>",
      source: "search_console",
      keywords: [],
      createdAt: "1730925051159",
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `suggestions`                                                                                                         | [models.GeoPromptSuggestion](../models/geo-prompt-suggestion.md)[]                                                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `organization`                                                                                                        | [models.ListGeoPromptSuggestionsResponseOrganization](../models/list-geo-prompt-suggestions-response-organization.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |