# CreateScheduleSourceConfigRequest

## Example Usage

```typescript
import { CreateScheduleSourceConfigRequest } from "@usenotra/sdk/models/operations";

let value: CreateScheduleSourceConfigRequest = {
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

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `cron`                                                            | [operations.CronRequest](../../models/operations/cron-request.md) | :heavy_check_mark:                                                | N/A                                                               |