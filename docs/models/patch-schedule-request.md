# PatchScheduleRequest

## Example Usage

```typescript
import { PatchScheduleRequest } from "@usenotra/sdk/models";

let value: PatchScheduleRequest = {
  name: "Weekly changelog",
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
  outputType: "changelog",
  outputConfig: {
    brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
    instructions:
      "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
  },
  enabled: true,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Display name shown in the dashboard.                                                         | Weekly changelog                                                                             |
| `sourceType`                                                                                 | [models.PatchScheduleRequestSourceType](../models/patch-schedule-request-source-type.md)     | :heavy_check_mark:                                                                           | Always cron for schedules.                                                                   |                                                                                              |
| `sourceConfig`                                                                               | [models.PatchScheduleRequestSourceConfig](../models/patch-schedule-request-source-config.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `targets`                                                                                    | [models.PatchScheduleRequestTargets](../models/patch-schedule-request-targets.md)            | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `outputType`                                                                                 | [models.PatchScheduleRequestOutputType](../models/patch-schedule-request-output-type.md)     | :heavy_check_mark:                                                                           | Type of content each run generates.                                                          | changelog                                                                                    |
| `outputConfig`                                                                               | [models.PatchScheduleRequestOutputConfig](../models/patch-schedule-request-output-config.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether the schedule runs. Disabled schedules are stored but never fire.                     | true                                                                                         |
| `autoPublish`                                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Publish generated posts automatically instead of saving them as drafts.                      | false                                                                                        |
| `lookbackWindow`                                                                             | [models.LookbackWindow](../models/lookback-window.md)                                        | :heavy_minus_sign:                                                                           | How far back each run collects source activity.                                              | last_7_days                                                                                  |