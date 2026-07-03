# CreateEventTriggerEventTrigger

## Example Usage

```typescript
import { CreateEventTriggerEventTrigger } from "@usenotra/sdk/models/operations";

let value: CreateEventTriggerEventTrigger = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "github_webhook",
  sourceConfig: {
    eventTypes: [],
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  outputType: "twitter_post",
  enabled: true,
  autoPublish: false,
  createdAt: "1705608630850",
  updatedAt: "1735619002808",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `organizationId`                                                                                                            | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `sourceType`                                                                                                                | [operations.CreateEventTriggerSourceTypeResponse](../../models/operations/create-event-trigger-source-type-response.md)     | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `sourceConfig`                                                                                                              | [operations.CreateEventTriggerSourceConfigResponse](../../models/operations/create-event-trigger-source-config-response.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `targets`                                                                                                                   | [operations.CreateEventTriggerTargetsResponse](../../models/operations/create-event-trigger-targets-response.md)            | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `outputType`                                                                                                                | [operations.CreateEventTriggerOutputTypeResponse](../../models/operations/create-event-trigger-output-type-response.md)     | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `outputConfig`                                                                                                              | [operations.CreateEventTriggerOutputConfigResponse](../../models/operations/create-event-trigger-output-config-response.md) | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |
| `enabled`                                                                                                                   | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `autoPublish`                                                                                                               | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `createdAt`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `updatedAt`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |