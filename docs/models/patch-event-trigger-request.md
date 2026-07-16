# PatchEventTriggerRequest

## Example Usage

```typescript
import { PatchEventTriggerRequest } from "@usenotra/sdk/models";

let value: PatchEventTriggerRequest = {
  sourceType: "github_webhook",
  sourceConfig: {
    eventTypes: [
      "push",
    ],
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  outputType: "twitter_post",
  enabled: false,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceType`                                                                                          | [models.PatchEventTriggerRequestSourceType](../models/patch-event-trigger-request-source-type.md)     | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `sourceConfig`                                                                                        | [models.PatchEventTriggerRequestSourceConfig](../models/patch-event-trigger-request-source-config.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `targets`                                                                                             | [models.PatchEventTriggerRequestTargets](../models/patch-event-trigger-request-targets.md)            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `outputType`                                                                                          | [models.PatchEventTriggerRequestOutputType](../models/patch-event-trigger-request-output-type.md)     | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `outputConfig`                                                                                        | [models.PatchEventTriggerRequestOutputConfig](../models/patch-event-trigger-request-output-config.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `enabled`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `autoPublish`                                                                                         | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |