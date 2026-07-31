# SendAgentSessionMessageRequest

## Example Usage

```typescript
import { SendAgentSessionMessageRequest } from "@usenotra/sdk/models/operations";

let value: SendAgentSessionMessageRequest = {
  sessionId: "<id>",
  body: {
    continuationToken: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `sessionId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `body`                                                                       | [models.SendAgentMessageRequest](../../models/send-agent-message-request.md) | :heavy_check_mark:                                                           | N/A                                                                          |