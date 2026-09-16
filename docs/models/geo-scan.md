# GeoScan

## Example Usage

```typescript
import { GeoScan } from "@usenotra/sdk/models";

let value: GeoScan = {
  id: "<id>",
  projectId: "<id>",
  status: "completed",
  startedAt: "<value>",
  finishedAt: "<value>",
  createdAt: "1724177187710",
  summary: {
    plannedChecks: 415437,
    completedChecks: 495984,
    mentionCount: 775479,
    failedChecks: 241900,
    engines: [],
  },
  errorCode: "<value>",
  errorMessage: "<value>",
  failedStage: "handoff",
  retryable: false,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [models.GeoScanStatus](../models/geo-scan-status.md)   | :heavy_check_mark:                                     | N/A                                                    |
| `startedAt`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `finishedAt`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `createdAt`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `summary`                                              | [models.GeoScanSummary](../models/geo-scan-summary.md) | :heavy_check_mark:                                     | N/A                                                    |
| `errorCode`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `errorMessage`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `failedStage`                                          | [models.FailedStage](../models/failed-stage.md)        | :heavy_check_mark:                                     | N/A                                                    |
| `retryable`                                            | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |