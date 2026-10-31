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
| `source`                                                                                                    | [operations.GetChatByExternalChannelSource](../../models/operations/get-chat-by-external-channel-source.md) | :heavy_check_mark:                                                                                          | Source the chat was linked with: a messaging platform, or dashboard for your own id.                        | discord                                                                                                     |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Channel ID on that platform, or the id you tagged the chat with.                                            | channel_123                                                                                                 |