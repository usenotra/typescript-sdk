# CreateEventTriggerRequest

## Example Usage

```typescript
import { CreateEventTriggerRequest } from "@usenotra/sdk/models/operations";

let value: CreateEventTriggerRequest = {
  sourceType: "github_webhook",
  sourceConfig: {
    eventTypes: [
      "push",
    ],
  },
  targets: {
    repositoryIds: [],
  },
  outputType: "changelog",
  enabled: true,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `sourceType`                                                                                                              | [operations.CreateEventTriggerSourceTypeRequest](../../models/operations/create-event-trigger-source-type-request.md)     | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `sourceConfig`                                                                                                            | [operations.CreateEventTriggerSourceConfigRequest](../../models/operations/create-event-trigger-source-config-request.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `targets`                                                                                                                 | [operations.CreateEventTriggerTargetsRequest](../../models/operations/create-event-trigger-targets-request.md)            | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `outputType`                                                                                                              | [operations.CreateEventTriggerOutputTypeRequest](../../models/operations/create-event-trigger-output-type-request.md)     | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `outputConfig`                                                                                                            | [operations.CreateEventTriggerOutputConfigRequest](../../models/operations/create-event-trigger-output-config-request.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `enabled`                                                                                                                 | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `autoPublish`                                                                                                             | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |