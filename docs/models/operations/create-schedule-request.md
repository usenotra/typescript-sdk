# CreateScheduleRequest

## Example Usage

```typescript
import { CreateScheduleRequest } from "@usenotra/sdk/models/operations";

let value: CreateScheduleRequest = {
  name: "Weekly changelog",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "weekly",
      hour: 9,
      minute: 0,
      dayOfWeek: 1,
      dayOfMonth: 1,
    },
  },
  targets: {
    repositoryIds: [
      "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
    ],
  },
  outputType: "changelog",
  outputConfig: {
    brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  },
  enabled: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Display name shown in the dashboard.                                                                                 | Weekly changelog                                                                                                     |
| `sourceType`                                                                                                         | [operations.CreateScheduleSourceTypeRequest](../../models/operations/create-schedule-source-type-request.md)         | :heavy_check_mark:                                                                                                   | Always cron for schedules.                                                                                           |                                                                                                                      |
| `sourceConfig`                                                                                                       | [operations.CreateScheduleSourceConfigRequest](../../models/operations/create-schedule-source-config-request.md)     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `targets`                                                                                                            | [operations.CreateScheduleTargetsRequest](../../models/operations/create-schedule-targets-request.md)                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `outputType`                                                                                                         | [operations.CreateScheduleOutputTypeRequest](../../models/operations/create-schedule-output-type-request.md)         | :heavy_check_mark:                                                                                                   | Type of content each run generates.                                                                                  | changelog                                                                                                            |
| `outputConfig`                                                                                                       | [operations.CreateScheduleOutputConfigRequest](../../models/operations/create-schedule-output-config-request.md)     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the schedule runs. Disabled schedules are stored but never fire.                                             | true                                                                                                                 |
| `autoPublish`                                                                                                        | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Publish generated posts automatically instead of saving them as drafts.                                              | false                                                                                                                |
| `lookbackWindow`                                                                                                     | [operations.CreateScheduleLookbackWindowRequest](../../models/operations/create-schedule-lookback-window-request.md) | :heavy_minus_sign:                                                                                                   | How far back each run collects source activity.                                                                      | last_7_days                                                                                                          |