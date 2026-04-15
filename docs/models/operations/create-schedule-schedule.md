# CreateScheduleSchedule

## Example Usage

```typescript
import { CreateScheduleSchedule } from "@usenotra/sdk/models/operations";

let value: CreateScheduleSchedule = {
  id: "<id>",
  organizationId: "<id>",
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "monthly",
      hour: 404812,
      minute: 401333,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  outputType: "blog_post",
  enabled: false,
  autoPublish: false,
  createdAt: "1719960250538",
  updatedAt: "1735625595953",
  lookbackWindow: "yesterday",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceType`                                                                                                           | [operations.CreateScheduleSourceTypeResponse](../../models/operations/create-schedule-source-type-response.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceConfig`                                                                                                         | [operations.CreateScheduleSourceConfigResponse](../../models/operations/create-schedule-source-config-response.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `targets`                                                                                                              | [operations.CreateScheduleTargetsResponse](../../models/operations/create-schedule-targets-response.md)                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `outputType`                                                                                                           | [operations.CreateScheduleOutputTypeResponse](../../models/operations/create-schedule-output-type-response.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `outputConfig`                                                                                                         | [operations.CreateScheduleOutputConfigResponse](../../models/operations/create-schedule-output-config-response.md)     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `autoPublish`                                                                                                          | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `lookbackWindow`                                                                                                       | [operations.CreateScheduleLookbackWindowResponse](../../models/operations/create-schedule-lookback-window-response.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |