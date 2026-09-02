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