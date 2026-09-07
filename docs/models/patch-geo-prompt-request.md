# PatchGeoPromptRequest

## Example Usage

```typescript
import { PatchGeoPromptRequest } from "@usenotra/sdk/models";

let value: PatchGeoPromptRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `tags`                                                                             | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Free-form labels for grouping custom prompts. Lowercased and deduplicated on save. |