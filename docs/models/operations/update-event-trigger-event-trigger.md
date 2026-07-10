# UpdateEventTriggerEventTrigger

## Example Usage

```typescript
import { UpdateEventTriggerEventTrigger } from "@usenotra/sdk/models/operations";

let value: UpdateEventTriggerEventTrigger = {
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
  outputType: "changelog",
  enabled: false,
  autoPublish: true,
  createdAt: "1718915528279",
  updatedAt: "1735651060314",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organizationId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sourceType`                                                                                               | [operations.UpdateEventTriggerSourceType](../../models/operations/update-event-trigger-source-type.md)     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sourceConfig`                                                                                             | [operations.UpdateEventTriggerSourceConfig](../../models/operations/update-event-trigger-source-config.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `targets`                                                                                                  | [operations.UpdateEventTriggerTargets](../../models/operations/update-event-trigger-targets.md)            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `outputType`                                                                                               | [operations.UpdateEventTriggerOutputType](../../models/operations/update-event-trigger-output-type.md)     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `outputConfig`                                                                                             | [operations.UpdateEventTriggerOutputConfig](../../models/operations/update-event-trigger-output-config.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `enabled`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `autoPublish`                                                                                              | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |