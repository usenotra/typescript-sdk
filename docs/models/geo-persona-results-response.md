# GeoPersonaResultsResponse

## Example Usage

```typescript
import { GeoPersonaResultsResponse } from "@usenotra/sdk/models";

let value: GeoPersonaResultsResponse = {
  results: [],
  scans: [
    {
      id: "<id>",
      capturedAt: "<value>",
    },
  ],
  selectedScanId: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `results`                                                                                              | [models.GeoPersonaResultsResponseResult](../models/geo-persona-results-response-result.md)[]           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `scans`                                                                                                | [models.Scan](../models/scan.md)[]                                                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `selectedScanId`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `organization`                                                                                         | [models.GeoPersonaResultsResponseOrganization](../models/geo-persona-results-response-organization.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |