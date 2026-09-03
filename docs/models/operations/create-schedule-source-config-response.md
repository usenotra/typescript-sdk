# CreateScheduleSourceConfigResponse

## Example Usage

```typescript
import { CreateScheduleSourceConfigResponse } from "@usenotra/sdk/models/operations";

let value: CreateScheduleSourceConfigResponse = {
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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cron`                                                                                            | [operations.CreateScheduleCronResponse](../../models/operations/create-schedule-cron-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |