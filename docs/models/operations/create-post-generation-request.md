# CreatePostGenerationRequest

## Example Usage

```typescript
import { CreatePostGenerationRequest } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationRequest = {
  contentType: "blog_post",
  brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  brandIdentityId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  repositoryIds: [
    "repo_1",
    "repo_2",
  ],
  linearIntegrationIds: [
    "linear_integration_1",
  ],
  integrations: {
    github: [
      "integration_1",
      "integration_2",
    ],
    linear: [
      "linear_integration_1",
    ],
  },
  github: {
    repositories: [
      {
        owner: "usenotra",
        repo: "notra",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                    | [operations.ContentTypeRequest](../../models/operations/content-type-request.md)                                                 | :heavy_check_mark:                                                                                                               | Type of content to generate.                                                                                                     | blog_post                                                                                                                        |
| `lookbackWindow`                                                                                                                 | [operations.LookbackWindowRequestBody](../../models/operations/lookback-window-request-body.md)                                  | :heavy_minus_sign:                                                                                                               | How far back to collect source activity (commits, pull requests, releases, Linear issues).                                       | last_7_days                                                                                                                      |
| `brandVoiceId`                                                                                                                   | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Deprecated. Use brandIdentityId instead.                                                                                         | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561                                                                                             |
| `brandIdentityId`                                                                                                                | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Brand identity to write in. Defaults to the organization's default brand identity.                                               | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561                                                                                             |
| `repositoryIds`                                                                                                                  | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Deprecated. Use integrations.github with GitHub integration IDs instead.                                                         | [<br/>"repo_1",<br/>"repo_2"<br/>]                                                                                               |
| `linearIntegrationIds`                                                                                                           | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Deprecated. Use integrations.linear with Linear integration IDs instead.                                                         | [<br/>"linear_integration_1"<br/>]                                                                                               |
| `integrations`                                                                                                                   | [operations.Integrations](../../models/operations/integrations.md)                                                               | :heavy_minus_sign:                                                                                                               | Source integrations to draw activity from. Omit this and github.repositories to use every connected GitHub integration.          |                                                                                                                                  |
| `github`                                                                                                                         | [operations.CreatePostGenerationGithub](../../models/operations/create-post-generation-github.md)                                | :heavy_minus_sign:                                                                                                               | Select connected repositories by owner and name instead of integration ID. Cannot be combined with integrations.github.          | {<br/>"repositories": [<br/>{<br/>"owner": "usenotra",<br/>"repo": "notra"<br/>}<br/>]<br/>}                                     |
| `dataPoints`                                                                                                                     | [operations.DataPoints](../../models/operations/data-points.md)                                                                  | :heavy_minus_sign:                                                                                                               | Which kinds of activity to collect from the selected sources.                                                                    |                                                                                                                                  |
| `selectedItems`                                                                                                                  | [operations.SelectedItems](../../models/operations/selected-items.md)                                                            | :heavy_minus_sign:                                                                                                               | Restrict generation to specific commits, pull requests, releases, or Linear issues instead of everything in the lookback window. |                                                                                                                                  |