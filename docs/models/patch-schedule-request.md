# PatchScheduleRequest

## Example Usage

```typescript
import { PatchScheduleRequest } from "@usenotra/sdk/models";

let value: PatchScheduleRequest = {
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "weekly",
      hour: 796887,
      minute: 32936,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  outputType: "changelog",
  enabled: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sourceType`                                                                                 | [models.PatchScheduleRequestSourceType](../models/patch-schedule-request-source-type.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sourceConfig`                                                                               | [models.PatchScheduleRequestSourceConfig](../models/patch-schedule-request-source-config.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `targets`                                                                                    | [models.PatchScheduleRequestTargets](../models/patch-schedule-request-targets.md)            | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `outputType`                                                                                 | [models.PatchScheduleRequestOutputType](../models/patch-schedule-request-output-type.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `outputConfig`                                                                               | [models.PatchScheduleRequestOutputConfig](../models/patch-schedule-request-output-config.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `autoPublish`                                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `lookbackWindow`                                                                             | [models.LookbackWindow](../models/lookback-window.md)                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |