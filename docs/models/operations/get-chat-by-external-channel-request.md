# GetChatByExternalChannelRequest

## Example Usage

```typescript
import { GetChatByExternalChannelRequest } from "@usenotra/sdk/models/operations";

let value: GetChatByExternalChannelRequest = {
  source: "discord",
  id: "channel_123",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                    | [operations.GetChatByExternalChannelSource](../../models/operations/get-chat-by-external-channel-source.md) | :heavy_check_mark:                                                                                          | Messaging platform the channel belongs to.                                                                  | discord                                                                                                     |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Channel ID on that platform.                                                                                | channel_123                                                                                                 |