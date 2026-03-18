# GetPostGenerationJob

## Example Usage

```typescript
import { GetPostGenerationJob } from "@usenotra/sdk/models/operations";

let value: GetPostGenerationJob = {
  id: "<id>",
  organizationId: "<id>",
  status: "running",
  contentType: "changelog",
  lookbackWindow: "last_30_days",
  repositoryIds: [
    "<value 1>",
  ],
  brandVoiceId: "<id>",
  workflowRunId: "<id>",
  postId: "<id>",
  error: "<value>",
  source: "dashboard",
  createdAt: "1725974471606",
  updatedAt: "1735627373100",
  completedAt: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.GetPostGenerationStatus](../../models/operations/get-post-generation-status.md)                  | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `contentType`                                                                                                | [operations.GetPostGenerationContentType](../../models/operations/get-post-generation-content-type.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `lookbackWindow`                                                                                             | [operations.GetPostGenerationLookbackWindow](../../models/operations/get-post-generation-lookback-window.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `repositoryIds`                                                                                              | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `brandVoiceId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `workflowRunId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `postId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `error`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `source`                                                                                                     | [operations.GetPostGenerationSource](../../models/operations/get-post-generation-source.md)                  | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `completedAt`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |