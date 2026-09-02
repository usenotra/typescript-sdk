# CreateGeoScanResponse

## Example Usage

```typescript
import { CreateGeoScanResponse } from "@usenotra/sdk/models/operations";

let value: CreateGeoScanResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
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