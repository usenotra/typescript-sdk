# UpdateGeoContentGapResponse

## Example Usage

```typescript
import { UpdateGeoContentGapResponse } from "@usenotra/sdk/models";

let value: UpdateGeoContentGapResponse = {
  promptId: "<id>",
  ignored: true,
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `promptId`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `ignored`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `organization`                                                                                              | [models.UpdateGeoContentGapResponseOrganization](../models/update-geo-content-gap-response-organization.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |