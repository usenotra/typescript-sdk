# CreateScheduleRequest

## Example Usage

```typescript
import { CreateScheduleRequest } from "@usenotra/sdk/models/operations";

let value: CreateScheduleRequest = {
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "weekly",
      hour: 842415,
      minute: 663732,
    },
  },
  targets: {
    repositoryIds: [],
  },
  outputType: "changelog",
  enabled: false,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `sourceType`                                                                                                         | [operations.CreateScheduleSourceTypeRequest](../../models/operations/create-schedule-source-type-request.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `sourceConfig`                                                                                                       | [operations.CreateScheduleSourceConfigRequest](../../models/operations/create-schedule-source-config-request.md)     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `targets`                                                                                                            | [operations.CreateScheduleTargetsRequest](../../models/operations/create-schedule-targets-request.md)                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outputType`                                                                                                         | [operations.CreateScheduleOutputTypeRequest](../../models/operations/create-schedule-output-type-request.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outputConfig`                                                                                                       | [operations.CreateScheduleOutputConfigRequest](../../models/operations/create-schedule-output-config-request.md)     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `autoPublish`                                                                                                        | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `lookbackWindow`                                                                                                     | [operations.CreateScheduleLookbackWindowRequest](../../models/operations/create-schedule-lookback-window-request.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |