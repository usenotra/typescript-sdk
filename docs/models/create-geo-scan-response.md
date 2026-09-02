# CreateGeoScanResponse

## Example Usage

```typescript
import { CreateGeoScanResponse } from "@usenotra/sdk/models";

let value: CreateGeoScanResponse = {
  scanId: "<id>",
  statusUrl: "https://shameful-stay.info",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `scanId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `statusUrl`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `organization`                                                                                 | [models.CreateGeoScanResponseOrganization](../models/create-geo-scan-response-organization.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |