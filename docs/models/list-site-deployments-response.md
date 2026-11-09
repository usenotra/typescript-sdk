# ListSiteDeploymentsResponse

## Example Usage

```typescript
import { ListSiteDeploymentsResponse } from "@usenotra/sdk/models";

let value: ListSiteDeploymentsResponse = {
  deployments: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `deployments`                                                                                              | [models.SiteDeployment](../models/site-deployment.md)[]                                                    | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organization`                                                                                             | [models.ListSiteDeploymentsResponseOrganization](../models/list-site-deployments-response-organization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |