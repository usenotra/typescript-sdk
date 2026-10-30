# ListWebhookDeliveriesResponse

Delivery history

## Example Usage

```typescript
import { ListWebhookDeliveriesResponse } from "@usenotra/sdk/models/operations";

let value: ListWebhookDeliveriesResponse = {
  deliveries: [
    {
      id: "<id>",
      eventId: "<id>",
      endpointId: "<id>",
      url: "https://soggy-self-confidence.org/",
      eventType: "post.generation.completed",
      status: "failed",
      attemptCount: 5312.9,
      nextAttemptAt: "<value>",
      createdAt: "1721411282505",
      statusCode: 1110.72,
      error: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `deliveries`                                                                                              | [operations.ListWebhookDeliveriesDelivery](../../models/operations/list-webhook-deliveries-delivery.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `hasMore`                                                                                                 | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |