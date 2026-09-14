# CreateGeoPromptRequest

## Example Usage

```typescript
import { CreateGeoPromptRequest } from "@usenotra/sdk/models";

let value: CreateGeoPromptRequest = {
  prompt: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `prompt`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `tags`                                                                             | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Free-form labels for grouping custom prompts. Lowercased and deduplicated on save. |