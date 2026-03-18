# GetPostGenerationResponse

Post generation status fetched successfully

## Example Usage

```typescript
import { GetPostGenerationResponse } from "@usenotra/sdk/models/operations";

let value: GetPostGenerationResponse = {
  job: {
    id: "<id>",
    organizationId: "<id>",
    status: "failed",
    contentType: "twitter_post",
    lookbackWindow: "last_14_days",
    repositoryIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    brandVoiceId: "<id>",
    workflowRunId: "<id>",
    postId: "<id>",
    error: "<value>",
    source: "api",
    createdAt: "1733970091582",
    updatedAt: "1735666569609",
    completedAt: "<value>",
  },
  events: [
    {
      id: "<id>",
      jobId: "<id>",
      type: "completed",
      message: "<value>",
      createdAt: "1730540074934",
      metadata: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `job`                                                                                 | [operations.GetPostGenerationJob](../../models/operations/get-post-generation-job.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `events`                                                                              | [operations.Event](../../models/operations/event.md)[]                                | :heavy_check_mark:                                                                    | N/A                                                                                   |