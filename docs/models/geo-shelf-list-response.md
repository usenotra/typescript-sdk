# GeoShelfListResponse

## Example Usage

```typescript
import { GeoShelfListResponse } from "@usenotra/sdk/models";

let value: GeoShelfListResponse = {
  sources: [],
  nextOffset: 706080,
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sources`                                                                                    | [models.GeoShelfListResponseSource](../models/geo-shelf-list-response-source.md)[]           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `nextOffset`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `organization`                                                                               | [models.GeoShelfListResponseOrganization](../models/geo-shelf-list-response-organization.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |