# CreateScheduleResponse

Schedule created successfully

## Example Usage

```typescript
import { CreateScheduleResponse } from "@usenotra/sdk/models/operations";

let value: CreateScheduleResponse = {
  schedule: {
    id: "<id>",
    organizationId: "<id>",
    name: "<value>",
    sourceType: "cron",
    sourceConfig: {
      cron: {
        frequency: "monthly",
        hour: 404812,
        minute: 401333,
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
    createdAt: "1727629015769",
    updatedAt: "1735630058355",
    lookbackWindow: "last_30_days",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `schedule`                                                                                       | [operations.CreateScheduleSchedule](../../models/operations/create-schedule-schedule.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [operations.CreateScheduleOrganization](../../models/operations/create-schedule-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |