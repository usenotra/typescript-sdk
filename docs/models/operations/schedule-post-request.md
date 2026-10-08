# SchedulePostRequest

## Example Usage

```typescript
import { SchedulePostRequest } from "@usenotra/sdk/models/operations";

let value: SchedulePostRequest = {
  postId: "post_123",
  body: {
    scheduledAt: new Date("2026-10-06T08:00:00Z"),
    timeZone: "Europe/Berlin",
    destinations: [
      {
        destination: "social",
        accountId: "acc_123",
      },
    ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `postId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | post_123                                                            |
| `body`                                                              | [models.SchedulePostRequest](../../models/schedule-post-request.md) | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |