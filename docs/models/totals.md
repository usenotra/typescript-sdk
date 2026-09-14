# Totals

## Example Usage

```typescript
import { Totals } from "@usenotra/sdk/models";

let value: Totals = {
  crawler: 299586,
  cited: 873533,
  aiReferral: 232940,
  conversions: null,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `crawler`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cited`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `aiReferral`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `conversions`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | AI referral visits that reached a configured conversion path. Null when no conversion paths are set. |