# PatchScheduleRequestSourceConfig

## Example Usage

```typescript
import { PatchScheduleRequestSourceConfig } from "@usenotra/sdk/models";

let value: PatchScheduleRequestSourceConfig = {
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

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `cron`                           | [models.Cron](../models/cron.md) | :heavy_check_mark:               | N/A                              |