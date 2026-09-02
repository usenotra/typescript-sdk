# ImportGeoCompetitorsResponse

## Example Usage

```typescript
import { ImportGeoCompetitorsResponse } from "@usenotra/sdk/models/operations";

let value: ImportGeoCompetitorsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    imported: 89900,
    updated: 739653,
    skipped: 579035,
    issues: [
      {
        line: 301056,
        message: "<value>",
      },
    ],
    competitors: [],
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: null,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [models.ImportGeoCompetitorsResponse](../../models/import-geo-competitors-response.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |