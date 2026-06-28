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
        hour: 140529,
        minute: 873438,
      },
    },
    targets: {
      repositoryIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    outputType: "image",
    enabled: true,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `scheduleId`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | sched_123                                                             |
| `body`                                                                | [models.PatchScheduleRequest](../../models/patch-schedule-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |