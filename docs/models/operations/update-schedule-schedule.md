# UpdateScheduleSchedule

## Example Usage

```typescript
import { UpdateScheduleSchedule } from "@usenotra/sdk/models/operations";

let value: UpdateScheduleSchedule = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "monthly",
      hour: 238864,
      minute: 698803,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  outputType: "twitter_post",
  enabled: true,
  autoPublish: true,
  createdAt: "1732700236463",
  updatedAt: "1735685542224",
  lookbackWindow: "current_day",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceType`                                                                                                           | [operations.UpdateScheduleSourceTypeResponse](../../models/operations/update-schedule-source-type-response.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceConfig`                                                                                                         | [operations.UpdateScheduleSourceConfigResponse](../../models/operations/update-schedule-source-config-response.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `targets`                                                                                                              | [operations.UpdateScheduleTargetsResponse](../../models/operations/update-schedule-targets-response.md)                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `outputType`                                                                                                           | [operations.UpdateScheduleOutputTypeResponse](../../models/operations/update-schedule-output-type-response.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `outputConfig`                                                                                                         | [operations.UpdateScheduleOutputConfigResponse](../../models/operations/update-schedule-output-config-response.md)     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `autoPublish`                                                                                                          | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `lookbackWindow`                                                                                                       | [operations.UpdateScheduleLookbackWindowResponse](../../models/operations/update-schedule-lookback-window-response.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |