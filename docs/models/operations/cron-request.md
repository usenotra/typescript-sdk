# CronRequest

## Example Usage

```typescript
import { CronRequest } from "@usenotra/sdk/models/operations";

let value: CronRequest = {
  frequency: "daily",
  hour: 359324,
  minute: 797536,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `frequency`                                                                 | [operations.FrequencyRequest](../../models/operations/frequency-request.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `hour`                                                                      | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `minute`                                                                    | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `dayOfWeek`                                                                 | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `dayOfMonth`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |