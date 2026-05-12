# UpdateScheduleSchedule

## Example Usage

```typescript
import { UpdateScheduleSchedule } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleSchedule = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "weekly",
      hour: 519591,
      minute: 437370,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  outputType: "twitter_post",
  enabled: true,
  autoPublish: true,
  createdAt: "1732700236463",
  updatedAt: "1735685542224",
  lookbackWindow: "current_day",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `organizationId`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `sourceType`                                                                                          | [operations.UpdateScheduleSourceType](../../models/operations/update-schedule-source-type.md)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `sourceConfig`                                                                                        | [operations.UpdateScheduleSourceConfig](../../models/operations/update-schedule-source-config.md)     | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `targets`                                                                                             | [operations.UpdateScheduleTargets](../../models/operations/update-schedule-targets.md)                | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `outputType`                                                                                          | [operations.UpdateScheduleOutputType](../../models/operations/update-schedule-output-type.md)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `outputConfig`                                                                                        | [operations.UpdateScheduleOutputConfig](../../models/operations/update-schedule-output-config.md)     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `enabled`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `autoPublish`                                                                                         | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `createdAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `updatedAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `lookbackWindow`                                                                                      | [operations.UpdateScheduleLookbackWindow](../../models/operations/update-schedule-lookback-window.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |