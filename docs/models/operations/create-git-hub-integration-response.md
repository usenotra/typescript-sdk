# CreateGitHubIntegrationResponse

## Example Usage

```typescript
import { CreateGitHubIntegrationResponse } from "@usenotra/sdk/models/operations";

let value: CreateGitHubIntegrationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    github: {
      id: "<id>",
      displayName: "Kelley96",
      owner: "<value>",
      repo: "<value>",
      defaultBranch: "<value>",
    },
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: null,
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.CreateGitHubIntegrationResponseBody](../../models/operations/create-git-hub-integration-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |