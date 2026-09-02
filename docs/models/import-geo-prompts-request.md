# ImportGeoPromptsRequest

## Example Usage

```typescript
import { ImportGeoPromptsRequest } from "@usenotra/sdk/models";

let value: ImportGeoPromptsRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `rows`                                                                                   | [models.ImportGeoPromptsRequestRow](../models/import-geo-prompts-request-row.md)[]       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `csv`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | Raw CSV text with a `prompt` column (optionally `enabled`). Used when `rows` is omitted. |