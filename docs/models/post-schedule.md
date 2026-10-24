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
      destination: "notra",
      config: {
        destination: "github",
        repositoryId: "<id>",
        merge: false,
      },
      status: "published",
      scheduledAt: new Date("2026-05-22T05:51:56.561Z"),
      timeZone: "Pacific/Auckland",
      attempts: 942899,
      errorCode: "<value>",
      lastError: "<value>",
      resultUrl: "https://hospitable-completion.org",
      publishedAt: new Date("2026-05-02T11:12:53.560Z"),
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