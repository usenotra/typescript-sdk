# Summary

## Example Usage

```typescript
import { Summary } from "@usenotra/sdk/models";

let value: Summary = {
  plannedChecks: 399543,
  completedChecks: 950147,
  mentionCount: 748575,
  failedChecks: 962975,
  engines: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `plannedChecks`                                        | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `completedChecks`                                      | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `mentionCount`                                         | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `failedChecks`                                         | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `engines`                                              | [models.GeoScanEngine](../models/geo-scan-engine.md)[] | :heavy_check_mark:                                     | N/A                                                    |