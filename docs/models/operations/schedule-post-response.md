# SchedulePostResponse

## Example Usage

```typescript
import { SchedulePostResponse } from "@usenotra/sdk/models/operations";

let value: SchedulePostResponse = {
  headers: {
    "key": [
      "<value 1>",
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
      scheduledAt: new Date("2026-01-01T13:13:45.048Z"),
      timeZone: "Indian/Mahe",
      publications: [
        {
          id: "<id>",
          destination: "social",
          config: {
            destination: "notra",
          },
          status: "scheduled",
          scheduledAt: new Date("2024-04-04T06:59:27.704Z"),
          timeZone: "Pacific/Port_Moresby",
          attempts: 781283,
          errorCode: "<value>",
          lastError: "<value>",
          resultUrl: "https://rotten-napkin.org/",
          publishedAt: new Date("2024-08-27T18:22:55.350Z"),
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `result`                                                              | [models.PostScheduleResponse](../../models/post-schedule-response.md) | :heavy_check_mark:                                                    | N/A                                                                   |