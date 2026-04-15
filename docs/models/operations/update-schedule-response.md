# UpdateScheduleResponse

Schedule updated successfully

## Example Usage

```typescript
import { UpdateScheduleResponse } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleResponse = {
  schedule: {
    id: "<id>",
    organizationId: "<id>",
    name: "<value>",
    sourceType: "cron",
    sourceConfig: {
      cron: {
        frequency: "monthly",
        hour: 238864,
        minute: 698803,
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
    createdAt: "1725338290475",
    updatedAt: "1735663664955",
    lookbackWindow: "last_7_days",
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
| `schedule`                                                                                       | [operations.UpdateScheduleSchedule](../../models/operations/update-schedule-schedule.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [operations.UpdateScheduleOrganization](../../models/operations/update-schedule-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |