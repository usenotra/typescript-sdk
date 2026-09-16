# GeoScanResponse

## Example Usage

```typescript
import { GeoScanResponse } from "@usenotra/sdk/models";

let value: GeoScanResponse = {
  scan: {
    id: "<id>",
    projectId: "<id>",
    status: "failed",
    startedAt: "<value>",
    finishedAt: "<value>",
    createdAt: "1735531513131",
    summary: {
      plannedChecks: 415437,
      completedChecks: 495984,
      mentionCount: 775479,
      failedChecks: 241900,
      engines: [],
    },
    errorCode: "<value>",
    errorMessage: "<value>",
    failedStage: "stale",
    retryable: false,
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `scan`                                                                            | [models.GeoScan](../models/geo-scan.md)                                           | :heavy_check_mark:                                                                | N/A                                                                               |
| `organization`                                                                    | [models.GeoScanResponseOrganization](../models/geo-scan-response-organization.md) | :heavy_check_mark:                                                                | N/A                                                                               |