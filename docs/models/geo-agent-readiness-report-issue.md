# GeoAgentReadinessReportIssue

## Example Usage

```typescript
import { GeoAgentReadinessReportIssue } from "@usenotra/sdk/models";

let value: GeoAgentReadinessReportIssue = {
  id: "<id>",
  name: "<value>",
  tier: "essential",
  result: "partial",
  details: "<value>",
  recommendation: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `id`                                          | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `tier`                                        | [models.Tier](../models/tier.md)              | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | [models.ResultEnum](../models/result-enum.md) | :heavy_check_mark:                            | N/A                                           |
| `details`                                     | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `recommendation`                              | *string*                                      | :heavy_check_mark:                            | N/A                                           |