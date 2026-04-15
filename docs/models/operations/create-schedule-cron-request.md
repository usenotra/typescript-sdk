# CreateScheduleCronRequest

## Example Usage

```typescript
import { CreateScheduleCronRequest } from "@usenotra/sdk/models/operations";

let value: CreateScheduleCronRequest = {
  frequency: "weekly",
  hour: 340359,
  minute: 376423,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `frequency`                                                                                               | [operations.CreateScheduleFrequencyRequest](../../models/operations/create-schedule-frequency-request.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `hour`                                                                                                    | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `minute`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `dayOfWeek`                                                                                               | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `dayOfMonth`                                                                                              | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |