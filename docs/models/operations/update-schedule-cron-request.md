# UpdateScheduleCronRequest

## Example Usage

```typescript
import { UpdateScheduleCronRequest } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleCronRequest = {
  frequency: "monthly",
  hour: 624853,
  minute: 912208,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `frequency`                                                                                               | [operations.UpdateScheduleFrequencyRequest](../../models/operations/update-schedule-frequency-request.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `hour`                                                                                                    | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `minute`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `dayOfWeek`                                                                                               | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `dayOfMonth`                                                                                              | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |