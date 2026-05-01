# PostChatMessageRequest

## Example Usage

```typescript
import { PostChatMessageRequest } from "@usenotra/sdk/models/operations";

let value: PostChatMessageRequest = {
  chatId: "chat_abc123",
  body: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `chatId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | chat_abc123                                                                |
| `body`                                                                     | [models.SendChatMessageRequest](../../models/send-chat-message-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |