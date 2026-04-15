# CreateScheduleSourceConfigRequest

## Example Usage

```typescript
import { CreateScheduleSourceConfigRequest } from "@usenotra/sdk/models/operations";

let value: CreateScheduleSourceConfigRequest = {
  cron: {
    frequency: "weekly",
    hour: 842415,
    minute: 663732,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `cron`                                                                                          | [operations.CreateScheduleCronRequest](../../models/operations/create-schedule-cron-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |