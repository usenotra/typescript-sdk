# ListAgentChatsResponse

## Example Usage

```typescript
import { ListAgentChatsResponse } from "@usenotra/sdk/models/operations";

let value: ListAgentChatsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    sessions: [
      {
        sessionId: "<id>",
        chatId: "<id>",
        surface: "<value>",
        status: "<value>",
        createdAt: "1706253449446",
        updatedAt: "1735608958988",
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ListAgentChatsResponse](../../models/list-agent-chats-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |