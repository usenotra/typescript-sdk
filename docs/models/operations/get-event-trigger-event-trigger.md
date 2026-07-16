# GetEventTriggerEventTrigger

## Example Usage

```typescript
import { GetEventTriggerEventTrigger } from "@usenotra/sdk/models/operations";

let value: GetEventTriggerEventTrigger = {
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
    repositoryIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  outputType: "linkedin_post",
  enabled: true,
  autoPublish: false,
  createdAt: "1728128922303",
  updatedAt: "1735675187804",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `sourceType`                                                                                         | [operations.GetEventTriggerSourceType](../../models/operations/get-event-trigger-source-type.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `sourceConfig`                                                                                       | [operations.GetEventTriggerSourceConfig](../../models/operations/get-event-trigger-source-config.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `targets`                                                                                            | [operations.GetEventTriggerTargets](../../models/operations/get-event-trigger-targets.md)            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `outputType`                                                                                         | [operations.GetEventTriggerOutputType](../../models/operations/get-event-trigger-output-type.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `outputConfig`                                                                                       | [operations.GetEventTriggerOutputConfig](../../models/operations/get-event-trigger-output-config.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `autoPublish`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |