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
    deduplicated: true,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `result`                                                                  | [models.SubmitFeedbackResponse](../../models/submit-feedback-response.md) | :heavy_check_mark:                                                        | N/A                                                                       |