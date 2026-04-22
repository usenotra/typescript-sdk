# CreatePostGenerationResponseBody

Post generation queued successfully

## Example Usage

```typescript
import { CreatePostGenerationResponseBody } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationResponseBody = {
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
    repositoryIds: [
      "<value 1>",
    ],
    brandVoiceId: "<id>",
    workflowRunId: "<id>",
    postId: "<id>",
    error: "<value>",
    source: "dashboard",
    createdAt: "1724262570437",
    updatedAt: "1735619864029",
    completedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                | [operations.CreatePostGenerationOrganization](../../models/operations/create-post-generation-organization.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `job`                                                                                                         | [operations.CreatePostGenerationJob](../../models/operations/create-post-generation-job.md)                   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |