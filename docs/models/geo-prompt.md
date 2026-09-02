# GeoPrompt

## Example Usage

```typescript
import { GeoPrompt } from "@usenotra/sdk/models";

let value: GeoPrompt = {
  id: "<id>",
  prompt: "<value>",
  enabled: true,
  source: "custom",
  createdAt: "1727687344386",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `prompt`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `enabled`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `source`                                                 | [models.GeoPromptSource](../models/geo-prompt-source.md) | :heavy_check_mark:                                       | N/A                                                      |
| `createdAt`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |