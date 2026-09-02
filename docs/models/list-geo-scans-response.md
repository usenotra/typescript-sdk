# ListGeoScansResponse

## Example Usage

```typescript
import { ListGeoScansResponse } from "@usenotra/sdk/models";

let value: ListGeoScansResponse = {
  scans: [],
  pagination: {
    limit: 490829,
    currentPage: 125967,
    nextPage: 215342,
    previousPage: 820316,
    totalPages: 208847,
    totalItems: 356990,
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `scans`                                                                                      | [models.GeoScan](../models/geo-scan.md)[]                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [models.ListGeoScansResponsePagination](../models/list-geo-scans-response-pagination.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `organization`                                                                               | [models.ListGeoScansResponseOrganization](../models/list-geo-scans-response-organization.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |