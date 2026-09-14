# PublicExternalChannelId

Link the chat to a Discord or Slack channel so it can be found later with GET /v1/chats/by-external.

## Example Usage

```typescript
import { PublicExternalChannelId } from "@usenotra/sdk/models";

let value: PublicExternalChannelId = {
  source: "slack",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `source`                                                                               | [models.PublicExternalChannelIdSource](../models/public-external-channel-id-source.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |