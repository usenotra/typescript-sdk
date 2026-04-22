# CreatePostGenerationResponse

## Example Usage

```typescript
import { CreatePostGenerationResponse } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [operations.CreatePostGenerationResponseBody](../../models/operations/create-post-generation-response-body.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |