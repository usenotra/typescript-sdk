# SchedulePostResponse

## Example Usage

```typescript
import { SchedulePostResponse } from "@usenotra/sdk/models/operations";

let value: SchedulePostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `result`                                                              | [models.PostScheduleResponse](../../models/post-schedule-response.md) | :heavy_check_mark:                                                    | N/A                                                                   |