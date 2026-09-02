# GeoContentGapsResponse

## Example Usage

```typescript
import { GeoContentGapsResponse } from "@usenotra/sdk/models";

let value: GeoContentGapsResponse = {
  promptGaps: [],
  searchGaps: [],
  hasScanData: false,
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `promptGaps`                                                                                     | [models.PromptGap](../models/prompt-gap.md)[]                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `searchGaps`                                                                                     | [models.SearchGap](../models/search-gap.md)[]                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `hasScanData`                                                                                    | *boolean*                                                                                        | :heavy_check_mark:                                                                               | False until the project has at least one scan result.                                            |
| `organization`                                                                                   | [models.GeoContentGapsResponseOrganization](../models/geo-content-gaps-response-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |