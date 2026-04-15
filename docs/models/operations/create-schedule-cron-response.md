# CreateScheduleCronResponse

## Example Usage

```typescript
import { CreateScheduleCronResponse } from "@usenotra/sdk/models/operations";

let value: CreateScheduleCronResponse = {
  frequency: "weekly",
  hour: 407394,
  minute: 966941,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `frequency`                                                                                                 | [operations.CreateScheduleFrequencyResponse](../../models/operations/create-schedule-frequency-response.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `hour`                                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `minute`                                                                                                    | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `dayOfWeek`                                                                                                 | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `dayOfMonth`                                                                                                | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |