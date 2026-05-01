# GetChatResponse

## Example Usage

```typescript
import { GetChatResponse } from "@usenotra/sdk/models";

let value: GetChatResponse = {
  chat: {
    chatId: "<id>",
    title: "<value>",
    createdAt: "1710338232816",
    updatedAt: "1735655105040",
    pinnedAt: "<value>",
  },
  messages: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `chat`                                                         | [models.ChatSessionSummary](../models/chat-session-summary.md) | :heavy_check_mark:                                             | N/A                                                            |
| `messages`                                                     | *any*[]                                                        | :heavy_check_mark:                                             | N/A                                                            |