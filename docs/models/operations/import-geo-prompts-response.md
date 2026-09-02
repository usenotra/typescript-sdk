# ImportGeoPromptsResponse

## Example Usage

```typescript
import { ImportGeoPromptsResponse } from "@usenotra/sdk/models/operations";

let value: ImportGeoPromptsResponse = {
  headers: {},
  result: {
    imported: 146974,
    updated: 834884,
    skipped: 209043,
    issues: [],
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ImportGeoPromptsResponse](../../models/import-geo-prompts-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |