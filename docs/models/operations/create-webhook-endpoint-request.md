# CreateWebhookEndpointRequest

## Example Usage

```typescript
import { CreateWebhookEndpointRequest } from "@usenotra/sdk/models/operations";

let value: CreateWebhookEndpointRequest = {
  url: "https://functional-slide.info",
  events: [
    "post.updated",
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `url`                                                                 | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `events`                                                              | [operations.EventRequest](../../models/operations/event-request.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |