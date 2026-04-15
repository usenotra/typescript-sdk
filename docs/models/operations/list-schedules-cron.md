# ListSchedulesCron

## Example Usage

```typescript
import { ListSchedulesCron } from "@usenotra/sdk/models/operations";

let value: ListSchedulesCron = {
  frequency: "weekly",
  hour: 119273,
  minute: 825919,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `frequency`                                                                              | [operations.ListSchedulesFrequency](../../models/operations/list-schedules-frequency.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hour`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `minute`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `dayOfWeek`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `dayOfMonth`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |