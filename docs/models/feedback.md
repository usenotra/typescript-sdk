# Feedback

## Example Usage

```typescript
import { Feedback } from "@usenotra/sdk/models";

let value: Feedback = {
  id: "<id>",
  projectId: null,
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
  contextUrl: "https://disloyal-hyena.biz/",
  externalId: "<id>",
  idempotencyKey: "<value>",
  metadata: {},
  resolvedAt: "<value>",
  createdAt: "1728932364371",
  updatedAt: "1735613712885",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `projectId`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `source`                                                    | [models.FeedbackSource](../models/feedback-source.md)       | :heavy_check_mark:                                          | Channel the feedback arrived through.                       | mcp                                                         |
| `kind`                                                      | [models.FeedbackKind](../models/feedback-kind.md)           | :heavy_check_mark:                                          | What kind of feedback this is.                              | bug                                                         |
| `sentiment`                                                 | [models.FeedbackSentiment](../models/feedback-sentiment.md) | :heavy_check_mark:                                          | Overall sentiment of the feedback.                          | negative                                                    |
| `status`                                                    | [models.FeedbackStatus](../models/feedback-status.md)       | :heavy_check_mark:                                          | Triage status.                                              | new                                                         |
| `title`                                                     | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `message`                                                   | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `agentClient`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `agentModel`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `toolVersion`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `userAgent`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `contextUrl`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `externalId`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `idempotencyKey`                                            | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `metadata`                                                  | Record<string, *any*>                                       | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `resolvedAt`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `createdAt`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `updatedAt`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |