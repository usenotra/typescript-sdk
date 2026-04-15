# UpdateScheduleCronResponse

## Example Usage

```typescript
import { UpdateScheduleCronResponse } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleCronResponse = {
  frequency: "monthly",
  hour: 851702,
  minute: 907836,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `frequency`                                                                                                 | [operations.UpdateScheduleFrequencyResponse](../../models/operations/update-schedule-frequency-response.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `hour`                                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `minute`                                                                                                    | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `dayOfWeek`                                                                                                 | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `dayOfMonth`                                                                                                | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |