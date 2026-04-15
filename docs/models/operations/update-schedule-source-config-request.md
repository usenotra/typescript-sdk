# UpdateScheduleSourceConfigRequest

## Example Usage

```typescript
import { UpdateScheduleSourceConfigRequest } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleSourceConfigRequest = {
  cron: {
    frequency: "monthly",
    hour: 277395,
    minute: 829417,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `cron`                                                                                          | [operations.UpdateScheduleCronRequest](../../models/operations/update-schedule-cron-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |