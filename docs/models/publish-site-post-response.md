# PublishSitePostResponse

## Example Usage

```typescript
import { PublishSitePostResponse } from "@usenotra/sdk/models";

let value: PublishSitePostResponse = {
  operation: "updated",
  branchName: "<value>",
  path: "/home/user",
  pullRequestNumber: 11835,
  pullRequestUrl: "https://purple-characterization.com/",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `operation`                                                                                        | [models.Operation](../models/operation.md)                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `branchName`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `path`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pullRequestNumber`                                                                                | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pullRequestUrl`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organization`                                                                                     | [models.PublishSitePostResponseOrganization](../models/publish-site-post-response-organization.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |