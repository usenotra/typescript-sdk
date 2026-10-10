# PostSchedule

## Example Usage

```typescript
import { PostSchedule } from "@usenotra/sdk/models";

let value: PostSchedule = {
  postId: "<id>",
  scheduledAt: new Date("2025-03-07T12:32:10.488Z"),
  timeZone: "Africa/Tripoli",
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `postId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheduledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeZone`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publications`                                                                                | [models.ScheduledPublication](../models/scheduled-publication.md)[]                           | :heavy_check_mark:                                                                            | N/A                                                                                           |