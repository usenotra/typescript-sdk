# ListGeoSequencesResponse

## Example Usage

```typescript
import { ListGeoSequencesResponse } from "@usenotra/sdk/models";

let value: ListGeoSequencesResponse = {
  sequences: [],
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
| `sequences`                                                                                          | [models.GeoSequence](../models/geo-sequence.md)[]                                                    | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `organization`                                                                                       | [models.ListGeoSequencesResponseOrganization](../models/list-geo-sequences-response-organization.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |