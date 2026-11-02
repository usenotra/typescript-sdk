# CreateGeoPromptScanResponse

## Example Usage

```typescript
import { CreateGeoPromptScanResponse } from "@usenotra/sdk/models/operations";

let value: CreateGeoPromptScanResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    scanId: "<id>",
    statusUrl: "https://exotic-reach.biz/",
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
| `result`                                                                 | [models.CreateGeoScanResponse](../../models/create-geo-scan-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |