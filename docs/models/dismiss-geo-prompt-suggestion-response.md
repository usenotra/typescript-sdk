# DismissGeoPromptSuggestionResponse

## Example Usage

```typescript
import { DismissGeoPromptSuggestionResponse } from "@usenotra/sdk/models";

let value: DismissGeoPromptSuggestionResponse = {
  id: "<id>",
  dismissed: false,
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `dismissed`                                                                                                               | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `organization`                                                                                                            | [models.DismissGeoPromptSuggestionResponseOrganization](../models/dismiss-geo-prompt-suggestion-response-organization.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |