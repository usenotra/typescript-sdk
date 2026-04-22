# CreateGitHubIntegrationResponseBody

GitHub integration created successfully

## Example Usage

```typescript
import { CreateGitHubIntegrationResponseBody } from "@usenotra/sdk/models/operations";

let value: CreateGitHubIntegrationResponseBody = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `github`                                                                                                             | [operations.CreateGitHubIntegrationGithub](../../models/operations/create-git-hub-integration-github.md)             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `organization`                                                                                                       | [operations.CreateGitHubIntegrationOrganization](../../models/operations/create-git-hub-integration-organization.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |