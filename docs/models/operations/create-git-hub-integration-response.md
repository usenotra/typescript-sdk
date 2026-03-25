# CreateGitHubIntegrationResponse

GitHub integration created successfully

## Example Usage

```typescript
import { CreateGitHubIntegrationResponse } from "@usenotra/sdk/models/operations";

let value: CreateGitHubIntegrationResponse = {
  github: {
    id: "<id>",
    displayName: "Evert_Nader34",
    owner: "<value>",
    repo: "<value>",
    defaultBranch: "<value>",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `github`                                                                                                             | [operations.CreateGitHubIntegrationGithub](../../models/operations/create-git-hub-integration-github.md)             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `organization`                                                                                                       | [operations.CreateGitHubIntegrationOrganization](../../models/operations/create-git-hub-integration-organization.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |