# CreatePostPullRequestRequestBody

Where to open the pull request. Omit both fields when the organization has exactly one connected GitHub repository.

## Example Usage

```typescript
import { CreatePostPullRequestRequestBody } from "@usenotra/sdk/models/operations";

let value: CreatePostPullRequestRequestBody = {
  integrationId: "integration_1",
  github: {
    owner: "usenotra",
    repo: "notra",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `integrationId`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | GitHub integration ID from GET /v1/integrations to open the pull request in.                         | integration_1                                                                                        |
| `github`                                                                                             | [operations.CreatePostPullRequestGithub](../../models/operations/create-post-pull-request-github.md) | :heavy_minus_sign:                                                                                   | Connected repository by owner and name, instead of integrationId.                                    | {<br/>"owner": "usenotra",<br/>"repo": "notra"<br/>}                                                 |