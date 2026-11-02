# CreateWebhookEndpointResponse

Endpoint and one-time signing secret

## Example Usage

```typescript
import { CreateWebhookEndpointResponse } from "@usenotra/sdk/models/operations";

let value: CreateWebhookEndpointResponse = {
  endpoint: {
    id: "<id>",
    organizationId: "<id>",
    url: "https://those-cook.name/",
    events: [],
    enabled: true,
    createdAt: "1732838710316",
  },
  secret: "<value>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `endpoint`                                                                                              | [operations.CreateWebhookEndpointEndpoint](../../models/operations/create-webhook-endpoint-endpoint.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `secret`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |