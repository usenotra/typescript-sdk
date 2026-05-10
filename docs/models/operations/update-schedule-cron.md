# UpdateScheduleCron

## Example Usage

```typescript
import { UpdateScheduleCron } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleCron = {
  frequency: "weekly",
  hour: 391683,
  minute: 348334,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `frequency`                                                                                | [operations.UpdateScheduleFrequency](../../models/operations/update-schedule-frequency.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hour`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `minute`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `dayOfWeek`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `dayOfMonth`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |