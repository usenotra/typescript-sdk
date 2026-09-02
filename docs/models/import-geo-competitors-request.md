# ImportGeoCompetitorsRequest

## Example Usage

```typescript
import { ImportGeoCompetitorsRequest } from "@usenotra/sdk/models";

let value: ImportGeoCompetitorsRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `rows`                                                                                                    | [models.ImportGeoCompetitorsRequestRow](../models/import-geo-competitors-request-row.md)[]                | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `csv`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Raw CSV text with a `name` column (optionally `domain`, `kind`, `synonyms`). Used when `rows` is omitted. |