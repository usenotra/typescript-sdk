# ChatSessionSummary

## Example Usage

```typescript
import { ChatSessionSummary } from "@usenotra/sdk/models";

let value: ChatSessionSummary = {
  chatId: "<id>",
  title: "<value>",
  createdAt: "1730190193552",
  updatedAt: "1735661278934",
  pinnedAt: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `chatId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `title`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pinnedAt`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `externalChannelId`                                          | [models.ExternalChannelId](../models/external-channel-id.md) | :heavy_minus_sign:                                           | N/A                                                          |