# UpdateScheduleRequest

## Example Usage

```typescript
import { UpdateScheduleRequest } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleRequest = {
  scheduleId: "sched_123",
  body: {
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
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `scheduleId`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | sched_123                                                             |
| `body`                                                                | [models.PatchScheduleRequest](../../models/patch-schedule-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |