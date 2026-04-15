# ListSchedulesSchedule

## Example Usage

```typescript
import { ListSchedulesSchedule } from "@usenotra/sdk/models/operations";

let value: ListSchedulesSchedule = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "weekly",
      hour: 216746,
      minute: 624772,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  outputType: "linkedin_post",
  enabled: false,
  autoPublish: true,
  createdAt: "1706955276503",
  updatedAt: "1735669024757",
  lookbackWindow: "yesterday",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `organizationId`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceType`                                                                                        | [operations.ListSchedulesSourceType](../../models/operations/list-schedules-source-type.md)         | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceConfig`                                                                                      | [operations.ListSchedulesSourceConfig](../../models/operations/list-schedules-source-config.md)     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `targets`                                                                                           | [operations.ListSchedulesTargets](../../models/operations/list-schedules-targets.md)                | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `outputType`                                                                                        | [operations.ListSchedulesOutputType](../../models/operations/list-schedules-output-type.md)         | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `outputConfig`                                                                                      | [operations.ListSchedulesOutputConfig](../../models/operations/list-schedules-output-config.md)     | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `enabled`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `autoPublish`                                                                                       | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `lookbackWindow`                                                                                    | [operations.ListSchedulesLookbackWindow](../../models/operations/list-schedules-lookback-window.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |