# SendChatMessageRequest

## Example Usage

```typescript
import { SendChatMessageRequest } from "@usenotra/sdk/models";

let value: SendChatMessageRequest = {
  message: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `message`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `model`                                                      | [models.Model](../models/model.md)                           | :heavy_minus_sign:                                           | N/A                                                          |
| `enableThinking`                                             | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `thinkingLevel`                                              | [models.ThinkingLevel](../models/thinking-level.md)          | :heavy_minus_sign:                                           | N/A                                                          |
| `timezone`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `context`                                                    | *models.Context*[]                                           | :heavy_minus_sign:                                           | N/A                                                          |
| `externalChannelId`                                          | [models.ExternalChannelId](../models/external-channel-id.md) | :heavy_minus_sign:                                           | N/A                                                          |