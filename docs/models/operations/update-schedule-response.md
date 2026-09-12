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
    createdAt: "1726223563189",
    updatedAt: "1735638165460",
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
| `schedule`                                                                                       | [operations.UpdateScheduleSchedule](../../models/operations/update-schedule-schedule.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [operations.UpdateScheduleOrganization](../../models/operations/update-schedule-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |