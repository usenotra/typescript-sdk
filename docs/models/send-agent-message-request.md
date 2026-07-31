# SendAgentMessageRequest

## Example Usage

```typescript
import { SendAgentMessageRequest } from "@usenotra/sdk/models";

let value: SendAgentMessageRequest = {
  continuationToken: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `message`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | The next user message. Omit when only answering a pending input request.                     |
| `inputResponses`                                                                             | [models.InputResponse](../models/input-response.md)[]                                        | :heavy_minus_sign:                                                                           | Answers to pending input.requested events (tool approvals, questions) from the event stream. |
| `continuationToken`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | The continuation token returned by the previous request for this session.                    |