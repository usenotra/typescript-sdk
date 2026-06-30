# PatchScheduleRequest

## Example Usage

```typescript
import { PatchScheduleRequest } from "@usenotra/sdk/models";

let value: PatchScheduleRequest = {
  name: "<value>",
  sourceType: "cron",
  sourceConfig: {
    cron: {
      frequency: "monthly",
      hour: 140529,
      minute: 873438,
    },
  },
  targets: {
    repositoryIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  outputType: "changelog",
  enabled: false,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `name`                                                | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `sourceType`                                          | [models.SourceType](../models/source-type.md)         | :heavy_check_mark:                                    | N/A                                                   |
| `sourceConfig`                                        | [models.SourceConfig](../models/source-config.md)     | :heavy_check_mark:                                    | N/A                                                   |
| `targets`                                             | [models.Targets](../models/targets.md)                | :heavy_check_mark:                                    | N/A                                                   |
| `outputType`                                          | [models.OutputType](../models/output-type.md)         | :heavy_check_mark:                                    | N/A                                                   |
| `outputConfig`                                        | [models.OutputConfig](../models/output-config.md)     | :heavy_minus_sign:                                    | N/A                                                   |
| `enabled`                                             | *boolean*                                             | :heavy_check_mark:                                    | N/A                                                   |
| `autoPublish`                                         | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `lookbackWindow`                                      | [models.LookbackWindow](../models/lookback-window.md) | :heavy_minus_sign:                                    | N/A                                                   |