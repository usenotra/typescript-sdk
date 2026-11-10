# CreatePostPullRequestResponse

## Example Usage

```typescript
import { CreatePostPullRequestResponse } from "@usenotra/sdk/models/operations";

let value: CreatePostPullRequestResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.CreatePostPullRequestResponseBody](../../models/operations/create-post-pull-request-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |