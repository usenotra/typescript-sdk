# ApproveGeoContentBriefResponse

## Example Usage

```typescript
import { ApproveGeoContentBriefResponse } from "@usenotra/sdk/models/operations";

let value: ApproveGeoContentBriefResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    runId: "<id>",
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApproveGeoContentBriefResponse](../../models/approve-geo-content-brief-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |