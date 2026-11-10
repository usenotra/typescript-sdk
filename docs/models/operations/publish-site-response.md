# PublishSiteResponse

## Example Usage

```typescript
import { PublishSiteResponse } from "@usenotra/sdk/models/operations";

let value: PublishSiteResponse = {
  headers: {},
  result: {
    published: true,
    commitSha: "<value>",
    deploymentQueued: false,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `headers`                                                           | Record<string, *string*[]>                                          | :heavy_check_mark:                                                  | N/A                                                                 |
| `result`                                                            | [models.PublishSiteResponse](../../models/publish-site-response.md) | :heavy_check_mark:                                                  | N/A                                                                 |