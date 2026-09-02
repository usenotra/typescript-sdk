# RunGeoSequenceResponse

## Example Usage

```typescript
import { RunGeoSequenceResponse } from "@usenotra/sdk/models/operations";

let value: RunGeoSequenceResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    checks: 533609,
    mentions: 476235,
    engines: [
      "<value 1>",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.RunGeoSequenceResponse](../../models/run-geo-sequence-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |