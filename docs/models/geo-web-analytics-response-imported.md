# GeoWebAnalyticsResponseImported

Latest completed history import. Days up to `until` come from it; native tracking starts the day after.

## Example Usage

```typescript
import { GeoWebAnalyticsResponseImported } from "@usenotra/sdk/models";

let value: GeoWebAnalyticsResponseImported = {
  provider: "cloudflare_rum",
  until: "<value>",
  nativeStart: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `provider`                                                                                 | [models.GeoWebAnalyticsResponseProvider](../models/geo-web-analytics-response-provider.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `until`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | Last imported day.                                                                         |
| `nativeStart`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | First day Notra tracked natively, when known.                                              |