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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `status`                                             | [models.GeoScanStatus](../models/geo-scan-status.md) | :heavy_check_mark:                                   | N/A                                                  |
| `startedAt`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `finishedAt`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `createdAt`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |