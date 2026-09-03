# UpdateScheduleSourceConfig

## Example Usage

```typescript
import { UpdateScheduleSourceConfig } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleSourceConfig = {
  cron: {
    frequency: "weekly",
    hour: 9,
    minute: 0,
    dayOfWeek: 1,
    dayOfMonth: 1,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cron`                                                                           | [operations.UpdateScheduleCron](../../models/operations/update-schedule-cron.md) | :heavy_check_mark:                                                               | N/A                                                                              |