# GeoTrafficOverviewResponseTotals

## Example Usage

```typescript
import { GeoTrafficOverviewResponseTotals } from "@usenotra/sdk/models";

let value: GeoTrafficOverviewResponseTotals = {
  crawler: 389711,
  cited: 469830,
  aiReferral: 78076,
  conversions: 850741,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `crawler`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cited`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `aiReferral`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `conversions`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | AI referral visits that reached a configured conversion path. Null when no conversion paths are set. |