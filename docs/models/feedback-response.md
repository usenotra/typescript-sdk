# FeedbackResponse

## Example Usage

```typescript
import { FeedbackResponse } from "@usenotra/sdk/models";

let value: FeedbackResponse = {
  feedback: {
    id: "<id>",
    projectId: "<id>",
    source: "mcp",
    kind: "bug",
    sentiment: "negative",
    status: "new",
    title: "<value>",
    message: "<value>",
    agentClient: "<value>",
    agentModel: "<value>",
    toolVersion: "<value>",
    userAgent: "<value>",
    contextUrl: "https://motionless-steeple.biz",
    externalId: "<id>",
    idempotencyKey: "<value>",
    metadata: {},
    resolvedAt: "<value>",
    createdAt: "1718281308790",
    updatedAt: "1735667707913",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `feedback`                               | [models.Feedback](../models/feedback.md) | :heavy_check_mark:                       | N/A                                      |