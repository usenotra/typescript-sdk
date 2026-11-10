# PostScheduleResponse

## Example Usage

```typescript
import { PostScheduleResponse } from "@usenotra/sdk/models";

let value: PostScheduleResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  schedule: {
    postId: "<id>",
    scheduledAt: new Date("2025-06-21T00:21:41.933Z"),
    timeZone: "Asia/Dili",
    publications: [],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `organization`                                                                              | [models.PostScheduleResponseOrganization](../models/post-schedule-response-organization.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `schedule`                                                                                  | [models.PostSchedule](../models/post-schedule.md)                                           | :heavy_check_mark:                                                                          | N/A                                                                                         |