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
      hour: 690067,
      minute: 398680,
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
| `sourceType`                                                                                                         | [operations.SourceTypeRequest](../../models/operations/source-type-request.md)                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `sourceConfig`                                                                                                       | [operations.SourceConfigRequest](../../models/operations/source-config-request.md)                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `targets`                                                                                                            | [operations.TargetsRequest](../../models/operations/targets-request.md)                                              | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outputType`                                                                                                         | [operations.OutputTypeRequest](../../models/operations/output-type-request.md)                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outputConfig`                                                                                                       | [operations.OutputConfigRequest](../../models/operations/output-config-request.md)                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `autoPublish`                                                                                                        | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `lookbackWindow`                                                                                                     | [operations.CreateScheduleLookbackWindowRequest](../../models/operations/create-schedule-lookback-window-request.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |