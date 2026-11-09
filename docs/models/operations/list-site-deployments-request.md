# ListSiteDeploymentsRequest

## Example Usage

```typescript
import { ListSiteDeploymentsRequest } from "@usenotra/sdk/models/operations";

let value: ListSiteDeploymentsRequest = {
  siteId: "site_8f2kq1",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `siteId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | site_8f2kq1                                                         |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | Newest deployments to return. Live deployments are always included. |                                                                     |