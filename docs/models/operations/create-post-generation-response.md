# CreatePostGenerationResponse

Post generation queued successfully

## Example Usage

```typescript
import { CreatePostGenerationResponse } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  job: {
    id: "<id>",
    organizationId: "<id>",
    status: "queued",
    contentType: "blog_post",
    lookbackWindow: "current_day",
    repositoryIds: [],
    brandVoiceId: "<id>",
    workflowRunId: "<id>",
    postId: "<id>",
    error: "<value>",
    source: "api",
    createdAt: "1720261866865",
    updatedAt: "1735646917648",
    completedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                | [operations.CreatePostGenerationOrganization](../../models/operations/create-post-generation-organization.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `job`                                                                                                         | [operations.CreatePostGenerationJob](../../models/operations/create-post-generation-job.md)                   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |