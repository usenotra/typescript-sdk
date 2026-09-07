# Cron

## Example Usage

```typescript
import { Cron } from "@usenotra/sdk/models";

let value: Cron = {
  frequency: "weekly",
  hour: 9,
  minute: 0,
  dayOfWeek: 1,
  dayOfMonth: 1,
  intervalDays: 3,
  anchorDate: "2026-09-03",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `frequency`                                                                                          | [models.Frequency](../models/frequency.md)                                                           | :heavy_check_mark:                                                                                   | How often the schedule runs.                                                                         | weekly                                                                                               |
| `hour`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | Hour of the day to run, in UTC (0-23).                                                               | 9                                                                                                    |
| `minute`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | Minute of the hour to run (0-59).                                                                    | 0                                                                                                    |
| `dayOfWeek`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Day of the week for weekly schedules, 0 (Sunday) to 6 (Saturday). Required when frequency is weekly. | 1                                                                                                    |
| `dayOfMonth`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Day of the month for monthly schedules (1-31). Required when frequency is monthly.                   | 1                                                                                                    |
| `intervalDays`                                                                                       | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Run every N days (2-90). Required when frequency is custom.                                          | 3                                                                                                    |
| `anchorDate`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | UTC calendar date (YYYY-MM-DD) a custom interval counts from. Defaults to today.                     | 2026-09-03                                                                                           |