# GetWebhookDeliveryDelivery

## Example Usage

```typescript
import { GetWebhookDeliveryDelivery } from "@usenotra/sdk/models/operations";

let value: GetWebhookDeliveryDelivery = {
  id: "<id>",
  eventId: "<id>",
  endpointId: "<id>",
  url: "https://muddy-boyfriend.info",
  eventType: "post.created",
  status: "pending",
  attemptCount: 3915.7,
  nextAttemptAt: "<value>",
  createdAt: "1704228194146",
  statusCode: 3696.72,
  error: "<value>",
  payload: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `eventId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endpointId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `eventType`                                                                                          | [operations.GetWebhookDeliveryEventType](../../models/operations/get-webhook-delivery-event-type.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.GetWebhookDeliveryStatus](../../models/operations/get-webhook-delivery-status.md)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `attemptCount`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `nextAttemptAt`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `statusCode`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `error`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `payload`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |