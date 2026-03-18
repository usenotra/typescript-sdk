# CreatePostGenerationRequest

## Example Usage

```typescript
import { CreatePostGenerationRequest } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationRequest = {
  contentType: "blog_post",
  brandVoiceId: "voice_123",
  brandIdentityId: "voice_123",
  repositoryIds: [
    "repo_1",
    "repo_2",
  ],
  integrations: {
    github: [
      "integration_1",
      "integration_2",
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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | [operations.ContentTypeRequest](../../models/operations/content-type-request.md)                  | :heavy_check_mark:                                                                                | N/A                                                                                               | blog_post                                                                                         |
| `lookbackWindow`                                                                                  | [operations.LookbackWindowRequest](../../models/operations/lookback-window-request.md)            | :heavy_minus_sign:                                                                                | N/A                                                                                               | last_7_days                                                                                       |
| `brandVoiceId`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | voice_123                                                                                         |
| `brandIdentityId`                                                                                 | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | voice_123                                                                                         |
| `repositoryIds`                                                                                   | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | N/A                                                                                               | [<br/>"repo_1",<br/>"repo_2"<br/>]                                                                |
| `integrations`                                                                                    | [operations.Integrations](../../models/operations/integrations.md)                                | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `github`                                                                                          | [operations.CreatePostGenerationGithub](../../models/operations/create-post-generation-github.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"repositories": [<br/>{<br/>"owner": "usenotra",<br/>"repo": "notra"<br/>}<br/>]<br/>}      |
| `dataPoints`                                                                                      | [operations.DataPoints](../../models/operations/data-points.md)                                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `selectedItems`                                                                                   | [operations.SelectedItems](../../models/operations/selected-items.md)                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |