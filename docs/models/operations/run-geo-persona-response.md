# RunGeoPersonaResponse

## Example Usage

```typescript
import { RunGeoPersonaResponse } from "@usenotra/sdk/models/operations";

let value: RunGeoPersonaResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    checks: 93963,
    mentions: 433702,
    engines: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.RunGeoPersonaResponse](../../models/run-geo-persona-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |