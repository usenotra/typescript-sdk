# PatchScheduleRequest

## Example Usage

```typescript
import { PatchScheduleRequest } from "@usenotra/sdk/models";

let value: PatchScheduleRequest = {
  name: "Weekly changelog",
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
  outputType: "changelog",
  outputConfig: {
    brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
    instructions:
      "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
    notify: {
      slack: true,
      email: false,
    },
  },
  enabled: true,
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Display name shown in the dashboard.                                                                                                         | Weekly changelog                                                                                                                             |
| `sourceType`                                                                                                                                 | [models.PatchScheduleRequestSourceType](../models/patch-schedule-request-source-type.md)                                                     | :heavy_minus_sign:                                                                                                                           | Always cron for schedules.                                                                                                                   |                                                                                                                                              |
| `sourceConfig`                                                                                                                               | [models.PatchScheduleRequestSourceConfig](../models/patch-schedule-request-source-config.md)                                                 | :heavy_minus_sign:                                                                                                                           | Replaces the cron settings as a whole. Send every cron field the frequency needs.                                                            |                                                                                                                                              |
| `targets`                                                                                                                                    | [models.PatchScheduleRequestTargets](../models/patch-schedule-request-targets.md)                                                            | :heavy_minus_sign:                                                                                                                           | Data source changes. The schedule must keep at least one GitHub or Linear integration.                                                       |                                                                                                                                              |
| `outputType`                                                                                                                                 | [models.PatchScheduleRequestOutputType](../models/patch-schedule-request-output-type.md)                                                     | :heavy_minus_sign:                                                                                                                           | Type of content each run generates.                                                                                                          | changelog                                                                                                                                    |
| `outputConfig`                                                                                                                               | [models.PatchScheduleRequestOutputConfig](../models/patch-schedule-request-output-config.md)                                                 | :heavy_minus_sign:                                                                                                                           | Output setting changes, merged field by field into the current settings. Set a field to null to clear it, or send null to clear all of them. |                                                                                                                                              |
| `enabled`                                                                                                                                    | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Whether the schedule runs. Disabled schedules are stored but never fire.                                                                     | true                                                                                                                                         |
| `autoPublish`                                                                                                                                | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Publish generated posts automatically instead of saving them as drafts.                                                                      |                                                                                                                                              |
| `lookbackWindow`                                                                                                                             | [models.LookbackWindow](../models/lookback-window.md)                                                                                        | :heavy_minus_sign:                                                                                                                           | How far back each run collects source activity.                                                                                              |                                                                                                                                              |