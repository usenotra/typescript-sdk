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
    agentModel: null,
    toolVersion: "<value>",
    userAgent: "<value>",
    contextUrl: "https://outlying-haircut.name",
    externalId: "<id>",
    idempotencyKey: "<value>",
    metadata: {},
    resolvedAt: "<value>",
    createdAt: "1712329635803",
    updatedAt: "1735608848863",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `feedback`                               | [models.Feedback](../models/feedback.md) | :heavy_check_mark:                       | N/A                                      |