# ListWebhookDeliveriesDelivery

## Example Usage

```typescript
import { ListWebhookDeliveriesDelivery } from "@usenotra/sdk/models/operations";

let value: ListWebhookDeliveriesDelivery = {
  id: "<id>",
  eventId: "<id>",
  endpointId: "<id>",
  url: "https://official-pillow.name",
  eventType: "brand_identity.generation.completed",
  status: "failed",
  attemptCount: 8643.34,
  nextAttemptAt: "<value>",
  createdAt: "1713536402103",
  statusCode: 4789.27,
  error: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `eventId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `endpointId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `url`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `eventType`                                                                                                          | [operations.ListWebhookDeliveriesEventType](../../models/operations/list-webhook-deliveries-event-type.md)           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [operations.ListWebhookDeliveriesDeliveryStatus](../../models/operations/list-webhook-deliveries-delivery-status.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `attemptCount`                                                                                                       | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `nextAttemptAt`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `statusCode`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `error`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |