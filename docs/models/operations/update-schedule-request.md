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
        hour: 277395,
        minute: 829417,
      },
    },
    targets: {
      repositoryIds: [
        "<value 1>",
      ],
    },
    outputType: "twitter_post",
    enabled: true,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `scheduleId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | sched_123                                                                                       |
| `body`                                                                                          | [operations.UpdateScheduleRequestBody](../../models/operations/update-schedule-request-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |