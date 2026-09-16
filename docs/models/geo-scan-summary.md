# GeoScanSummary

## Example Usage

```typescript
import { GeoScanSummary } from "@usenotra/sdk/models";

let value: GeoScanSummary = {
  plannedChecks: 748372,
  completedChecks: 993444,
  mentionCount: 528432,
  failedChecks: 771205,
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