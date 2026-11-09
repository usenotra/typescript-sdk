# GeoTrafficPagesResponsePage

## Example Usage

```typescript
import { GeoTrafficPagesResponsePage } from "@usenotra/sdk/models";

let value: GeoTrafficPagesResponsePage = {
  path: "/var/spool",
  host: "bleak-reorganisation.name",
  source: "<value>",
  visitorType: "unknown",
  visits: 592886,
  lastSeenAt: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `path`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `host`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `source`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `visitorType`                                                                                     | [models.GeoTrafficPagesResponseVisitorType](../models/geo-traffic-pages-response-visitor-type.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `visits`                                                                                          | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `previousVisits`                                                                                  | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `lastSeenAt`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |