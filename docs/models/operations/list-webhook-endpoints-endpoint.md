# ListWebhookEndpointsEndpoint

## Example Usage

```typescript
import { ListWebhookEndpointsEndpoint } from "@usenotra/sdk/models/operations";

let value: ListWebhookEndpointsEndpoint = {
  id: "<id>",
  organizationId: "<id>",
  url: "https://grounded-citizen.biz",
  events: [
    "post.unpublished",
  ],
  enabled: false,
  createdAt: "1719967543920",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `organizationId`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `url`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `events`                                                                                          | [operations.ListWebhookEndpointsEvent](../../models/operations/list-webhook-endpoints-event.md)[] | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `enabled`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `createdAt`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |