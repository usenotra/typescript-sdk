# GeoEngineListResponse

## Example Usage

```typescript
import { GeoEngineListResponse } from "@usenotra/sdk/models";

let value: GeoEngineListResponse = {
  engines: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `engines`                                                                                      | [models.GeoEngine](../models/geo-engine.md)[]                                                  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `organization`                                                                                 | [models.GeoEngineListResponseOrganization](../models/geo-engine-list-response-organization.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |