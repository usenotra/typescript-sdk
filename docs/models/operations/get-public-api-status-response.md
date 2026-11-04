# GetPublicApiStatusResponse

## Example Usage

```typescript
import { GetPublicApiStatusResponse } from "@usenotra/sdk/models/operations";

let value: GetPublicApiStatusResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    status: "ok",
    service: "Notra API",
    version: "<value>",
    public: true,
    authentication: {
      type: "bearer",
      resourceMetadata: "https://aged-ceramic.org",
      guide: "https://quixotic-lieu.info/",
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `result`                                                              | [models.PublicStatusResponse](../../models/public-status-response.md) | :heavy_check_mark:                                                    | N/A                                                                   |