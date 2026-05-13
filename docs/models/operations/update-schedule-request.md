# UpdateScheduleRequest

## Example Usage

```typescript
import { UpdateScheduleRequest } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleRequest = {
  scheduleId: "sched_123",
  body: {
    name: "<value>",
    sourceType: "cron",
    sourceConfig: {
      cron: {
        frequency: "monthly",
        hour: 253345,
        minute: 762301,
      },
    },
    targets: {
      repositoryIds: [
        "<value 1>",
      ],
    },
    outputType: "linkedin_post",
    enabled: true,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `scheduleId`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | sched_123                                                             |
| `body`                                                                | [models.PatchScheduleRequest](../../models/patch-schedule-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |