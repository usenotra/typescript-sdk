# SchedulePostRequest

## Example Usage

```typescript
import { SchedulePostRequest } from "@usenotra/sdk/models";

let value: SchedulePostRequest = {
  scheduledAt: new Date("2026-10-06T08:00:00Z"),
  timeZone: "Europe/Berlin",
  destinations: [
    {
      destination: "social",
      accountId: "acc_123",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `scheduledAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | When to publish, as an ISO 8601 timestamp. At most one year ahead; a time up to five minutes in the past publishes right away. | 2026-10-06T08:00:00Z                                                                                                           |
| `timeZone`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | IANA time zone the schedule was picked in. Used for display and emails only.                                                   | Europe/Berlin                                                                                                                  |
| `destinations`                                                                                                                 | *models.ScheduleDestination*[]                                                                                                 | :heavy_minus_sign:                                                                                                             | Where the post goes out besides Notra. The post is always marked as published in Notra at the scheduled time.                  |                                                                                                                                |