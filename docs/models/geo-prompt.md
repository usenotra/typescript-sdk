# GeoPrompt

## Example Usage

```typescript
import { GeoPrompt } from "@usenotra/sdk/models";

let value: GeoPrompt = {
  id: "<id>",
  prompt: "<value>",
  enabled: true,
  source: "custom",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  createdAt: "1734032056850",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `prompt`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `enabled`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `source`                                                 | [models.GeoPromptSource](../models/geo-prompt-source.md) | :heavy_check_mark:                                       | N/A                                                      |
| `tags`                                                   | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `createdAt`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |