# SubmitFeedbackResponse

## Example Usage

```typescript
import { SubmitFeedbackResponse } from "@usenotra/sdk/models";

let value: SubmitFeedbackResponse = {
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
  deduplicated: true,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `feedback`                                                                | [models.Feedback](../models/feedback.md)                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `deduplicated`                                                            | *boolean*                                                                 | :heavy_check_mark:                                                        | True when an existing feedback with the same idempotencyKey was returned. |