# GetWebhookDeliveryResponse

Delivery detail

## Example Usage

```typescript
import { GetWebhookDeliveryResponse } from "@usenotra/sdk/models/operations";

let value: GetWebhookDeliveryResponse = {
  delivery: {
    id: "<id>",
    eventId: "<id>",
    endpointId: "<id>",
    url: "https://huge-hovercraft.net",
    eventType: "post.generation.skipped",
    status: "failed",
    attemptCount: 9520.24,
    nextAttemptAt: "<value>",
    createdAt: "1731649106470",
    statusCode: 7639.3,
    error: "<value>",
    payload: "<value>",
  },
  attempts: [],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `delivery`                                                                                        | [operations.GetWebhookDeliveryDelivery](../../models/operations/get-webhook-delivery-delivery.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `attempts`                                                                                        | [operations.Attempt](../../models/operations/attempt.md)[]                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |