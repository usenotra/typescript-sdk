# CreateWebhookEndpointEndpoint

## Example Usage

```typescript
import { CreateWebhookEndpointEndpoint } from "@usenotra/sdk/models/operations";

let value: CreateWebhookEndpointEndpoint = {
  id: "<id>",
  organizationId: "<id>",
  url: "https://whole-confusion.info",
  events: [
    "post.generation.completed",
  ],
  enabled: false,
  createdAt: "1730366575259",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `organizationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `url`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `events`                                                                                                             | [operations.CreateWebhookEndpointEndpointEvent](../../models/operations/create-webhook-endpoint-endpoint-event.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |