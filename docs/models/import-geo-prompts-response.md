# ImportGeoPromptsResponse

## Example Usage

```typescript
import { ImportGeoPromptsResponse } from "@usenotra/sdk/models";

let value: ImportGeoPromptsResponse = {
  imported: 65145,
  updated: 146974,
  skipped: 834884,
  issues: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `imported`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updated`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `skipped`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `issues`                                                                                             | [models.ImportGeoPromptsResponseIssue](../models/import-geo-prompts-response-issue.md)[]             | :heavy_check_mark:                                                                                   | Rows rejected while parsing CSV. Always empty for `rows`.                                            |
| `organization`                                                                                       | [models.ImportGeoPromptsResponseOrganization](../models/import-geo-prompts-response-organization.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |