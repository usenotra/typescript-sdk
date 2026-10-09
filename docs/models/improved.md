# Improved

## Example Usage

```typescript
import { Improved } from "@usenotra/sdk/models";

let value: Improved = {
  id: "<id>",
  name: "<value>",
  tier: "recommended",
  previousResult: "partial",
  result: "partial",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `tier`                                                                 | [models.ImprovedTier](../models/improved-tier.md)                      | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousResult`                                                       | [models.ImprovedPreviousResult](../models/improved-previous-result.md) | :heavy_check_mark:                                                     | Result on the previous scan; null when the check passed.               |
| `result`                                                               | [models.ImprovedResult](../models/improved-result.md)                  | :heavy_check_mark:                                                     | Result on the latest scan; null when the check passes now.             |