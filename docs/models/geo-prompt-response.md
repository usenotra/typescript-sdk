# GeoPromptResponse

## Example Usage

```typescript
import { GeoPromptResponse } from "@usenotra/sdk/models";

let value: GeoPromptResponse = {
  prompt: {
    id: "<id>",
    prompt: "<value>",
    enabled: false,
    source: "auto",
    tags: [
      "<value 1>",
      "<value 2>",
    ],
    createdAt: "1712178450845",
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `prompt`                                                                              | [models.GeoPrompt](../models/geo-prompt.md)                                           | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `organization`                                                                        | [models.GeoPromptResponseOrganization](../models/geo-prompt-response-organization.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |