# GetGitHubActivityResponse

Activity fetched successfully

## Example Usage

```typescript
import { GetGitHubActivityResponse } from "@usenotra/sdk/models/operations";

let value: GetGitHubActivityResponse = {
  integration: {
    id: "<id>",
    displayName: "Blake.Rau",
    owner: "<value>",
    repo: "<value>",
    defaultBranch: "<value>",
  },
  type: "releases",
  since: "<value>",
  until: "<value>",
  items: [
    {
      ref: "482",
      title: "<value>",
      body: "<value>",
      author: "<value>",
      url: "https://trim-fireplace.org",
      occurredAt: "<value>",
    },
  ],
  pagination: {
    page: 757106,
    nextPage: 128614,
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `integration`                                                                                             | [operations.Integration](../../models/operations/integration.md)                                          | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `type`                                                                                                    | [operations.GetGitHubActivityTypeResponse](../../models/operations/get-git-hub-activity-type-response.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `since`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `until`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `items`                                                                                                   | [operations.Item](../../models/operations/item.md)[]                                                      | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `pagination`                                                                                              | [operations.GetGitHubActivityPagination](../../models/operations/get-git-hub-activity-pagination.md)      | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `organization`                                                                                            | [operations.GetGitHubActivityOrganization](../../models/operations/get-git-hub-activity-organization.md)  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |