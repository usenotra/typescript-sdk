# UpdateGeoPromptRequest

## Example Usage

```typescript
import { UpdateGeoPromptRequest } from "@usenotra/sdk/models/operations";

let value: UpdateGeoPromptRequest = {
  projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  promptId: "<id>",
  body: {
    enabled: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | b1f2c3d4-0000-4000-8000-000000000000                                     |
| `promptId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `body`                                                                   | [models.PatchGeoPromptRequest](../../models/patch-geo-prompt-request.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |