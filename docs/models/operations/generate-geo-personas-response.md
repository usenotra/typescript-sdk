# GenerateGeoPersonasResponse

## Example Usage

```typescript
import { GenerateGeoPersonasResponse } from "@usenotra/sdk/models/operations";

let value: GenerateGeoPersonasResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    job: {
      id: "<id>",
      status: "completed",
      personaId: "<id>",
      startedAt: "<value>",
      error: "<value>",
    },
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: null,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [models.GeoPersonaGenerationResponse](../../models/geo-persona-generation-response.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |