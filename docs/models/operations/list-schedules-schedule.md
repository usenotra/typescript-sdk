# ListSchedulesSchedule

## Example Usage

```typescript
import { ListSchedulesSchedule } from "@usenotra/sdk/models/operations";

let value: ListSchedulesSchedule = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "weekly",
      hour: 9,
      minute: 0,
      dayOfWeek: 1,
      dayOfMonth: 1,
      intervalDays: 3,
      anchorDate: "2026-09-03",
    },
  },
  targets: {
    repositoryIds: [
      "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
    ],
  },
  outputType: "image",
  outputConfig: {
    brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
    instructions:
      "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
  },
  enabled: false,
  autoPublish: true,
  createdAt: "1706955276503",
  updatedAt: "1735669024757",
  lookbackWindow: "yesterday",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `organizationId`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceType`                                                                                        | [operations.ListSchedulesSourceType](../../models/operations/list-schedules-source-type.md)         | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceConfig`                                                                                      | [operations.ListSchedulesSourceConfig](../../models/operations/list-schedules-source-config.md)     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `targets`                                                                                           | [operations.ListSchedulesTargets](../../models/operations/list-schedules-targets.md)                | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `outputType`                                                                                        | [operations.ListSchedulesOutputType](../../models/operations/list-schedules-output-type.md)         | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `outputConfig`                                                                                      | [operations.ListSchedulesOutputConfig](../../models/operations/list-schedules-output-config.md)     | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `enabled`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `autoPublish`                                                                                       | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `lookbackWindow`                                                                                    | [operations.ListSchedulesLookbackWindow](../../models/operations/list-schedules-lookback-window.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |