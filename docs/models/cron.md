# Cron

## Example Usage

```typescript
import { Cron } from "@usenotra/sdk/models";

let value: Cron = {
  frequency: "monthly",
  hour: 702573,
  minute: 345736,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `frequency`                                | [models.Frequency](../models/frequency.md) | :heavy_check_mark:                         | N/A                                        |
| `hour`                                     | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `minute`                                   | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `dayOfWeek`                                | *number*                                   | :heavy_minus_sign:                         | N/A                                        |
| `dayOfMonth`                               | *number*                                   | :heavy_minus_sign:                         | N/A                                        |