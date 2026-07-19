# ListEventTriggersEventTrigger

## Example Usage

```typescript
import { ListEventTriggersEventTrigger } from "@usenotra/sdk/models/operations";

let value: ListEventTriggersEventTrigger = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "github_webhook",
  sourceConfig: {
    eventTypes: [
      "release",
    ],
  },
  targets: {
    repositoryIds: [],
  },
  outputType: "linkedin_post",
  enabled: true,
  autoPublish: true,
  createdAt: "1718670798957",
  updatedAt: "1735649342252",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organizationId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sourceType`                                                                                             | [operations.ListEventTriggersSourceType](../../models/operations/list-event-triggers-source-type.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sourceConfig`                                                                                           | [operations.ListEventTriggersSourceConfig](../../models/operations/list-event-triggers-source-config.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `targets`                                                                                                | [operations.ListEventTriggersTargets](../../models/operations/list-event-triggers-targets.md)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outputType`                                                                                             | [operations.ListEventTriggersOutputType](../../models/operations/list-event-triggers-output-type.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outputConfig`                                                                                           | [operations.ListEventTriggersOutputConfig](../../models/operations/list-event-triggers-output-config.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `enabled`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `autoPublish`                                                                                            | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |