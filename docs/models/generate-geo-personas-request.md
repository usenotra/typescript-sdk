# GenerateGeoPersonasRequest

## Example Usage

```typescript
import { GenerateGeoPersonasRequest } from "@usenotra/sdk/models";

let value: GenerateGeoPersonasRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `personaId`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Regenerate this persona in place instead of creating a new set.                 |
| `brief`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | Describe one persona to add, such as 'a CFO at a 200-person logistics company'. |
| `promptsOnly`                                                                   | *true*                                                                          | :heavy_minus_sign:                                                              | With personaId, only rewrite its conversation prompts and keep its details.     |