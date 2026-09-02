# GeoTrafficPagesResponse

## Example Usage

```typescript
import { GeoTrafficPagesResponse } from "@usenotra/sdk/models";

let value: GeoTrafficPagesResponse = {
  configured: false,
  pages: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                          | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | False when the traffic backend is not configured for this deployment; the payload is then empty rather than an error. |
| `pages`                                                                                                               | [models.Page](../models/page.md)[]                                                                                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `organization`                                                                                                        | [models.GeoTrafficPagesResponseOrganization](../models/geo-traffic-pages-response-organization.md)                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |