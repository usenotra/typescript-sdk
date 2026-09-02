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
    createdAt: "1729998763593",
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