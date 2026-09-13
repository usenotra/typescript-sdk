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
    outputType: "image",
    outputConfig: {
      brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
      instructions:
        "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
    },
    enabled: true,
    autoPublish: false,
    createdAt: "1713957012919",
    updatedAt: "1735678242545",
    lookbackWindow: "yesterday",
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