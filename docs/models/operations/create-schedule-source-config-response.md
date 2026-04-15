# CreateScheduleSourceConfigResponse

## Example Usage

```typescript
import { CreateScheduleSourceConfigResponse } from "@usenotra/sdk/models/operations";

let value: CreateScheduleSourceConfigResponse = {
  cron: {
    frequency: "monthly",
    hour: 404812,
    minute: 401333,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cron`                                                                                            | [operations.CreateScheduleCronResponse](../../models/operations/create-schedule-cron-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |