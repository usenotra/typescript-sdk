# UpdateScheduleRequestBody

## Example Usage

```typescript
import { UpdateScheduleRequestBody } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleRequestBody = {
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "monthly",
      hour: 277395,
      minute: 829417,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
    ],
  },
  outputType: "linkedin_post",
  enabled: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `sourceType`                                                                                                         | [operations.UpdateScheduleSourceTypeRequest](../../models/operations/update-schedule-source-type-request.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `sourceConfig`                                                                                                       | [operations.UpdateScheduleSourceConfigRequest](../../models/operations/update-schedule-source-config-request.md)     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `targets`                                                                                                            | [operations.UpdateScheduleTargetsRequest](../../models/operations/update-schedule-targets-request.md)                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outputType`                                                                                                         | [operations.UpdateScheduleOutputTypeRequest](../../models/operations/update-schedule-output-type-request.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outputConfig`                                                                                                       | [operations.UpdateScheduleOutputConfigRequest](../../models/operations/update-schedule-output-config-request.md)     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `autoPublish`                                                                                                        | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `lookbackWindow`                                                                                                     | [operations.UpdateScheduleLookbackWindowRequest](../../models/operations/update-schedule-lookback-window-request.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |