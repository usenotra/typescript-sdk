# SubmitFeedbackResponse

## Example Usage

```typescript
import { SubmitFeedbackResponse } from "@usenotra/sdk/models/operations";

let value: SubmitFeedbackResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `result`                                                                  | [models.SubmitFeedbackResponse](../../models/submit-feedback-response.md) | :heavy_check_mark:                                                        | N/A                                                                       |