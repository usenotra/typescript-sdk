# CreatePostPullRequestResponseBody

Draft pull request opened or updated

## Example Usage

```typescript
import { CreatePostPullRequestResponseBody } from "@usenotra/sdk/models/operations";

let value: CreatePostPullRequestResponseBody = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  pullRequest: {
    number: 444142,
    url: "https://palatable-citizen.org/",
    branchName: "<value>",
    path: "/opt/lib",
    operation: "created",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                   | [operations.CreatePostPullRequestOrganization](../../models/operations/create-post-pull-request-organization.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `pullRequest`                                                                                                    | [operations.CreatePostPullRequestPullRequest](../../models/operations/create-post-pull-request-pull-request.md)  | :heavy_check_mark:                                                                                               | N/A                                                                                                              |