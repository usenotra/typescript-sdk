# ImportGeoCompetitorsResponse

## Example Usage

```typescript
import { ImportGeoCompetitorsResponse } from "@usenotra/sdk/models";

let value: ImportGeoCompetitorsResponse = {
  imported: 626936,
  updated: 228951,
  skipped: 212967,
  issues: [],
  competitors: [
    {
      id: "<id>",
      name: "<value>",
      domain: "standard-ethyl.biz",
      synonyms: [
        "<value 1>",
        "<value 2>",
      ],
      kind: "indirect",
      color: "indigo",
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `imported`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updated`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `skipped`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `issues`                                                                                                     | [models.ImportGeoCompetitorsResponseIssue](../models/import-geo-competitors-response-issue.md)[]             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `competitors`                                                                                                | [models.GeoCompetitor](../models/geo-competitor.md)[]                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organization`                                                                                               | [models.ImportGeoCompetitorsResponseOrganization](../models/import-geo-competitors-response-organization.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |