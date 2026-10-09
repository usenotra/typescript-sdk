# Added

## Example Usage

```typescript
import { Added } from "@usenotra/sdk/models";

let value: Added = {
  id: "<id>",
  name: "<value>",
  tier: "bonus",
  previousResult: "partial",
  result: "failed",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `tier`                                                           | [models.AddedTier](../models/added-tier.md)                      | :heavy_check_mark:                                               | N/A                                                              |
| `previousResult`                                                 | [models.AddedPreviousResult](../models/added-previous-result.md) | :heavy_check_mark:                                               | Result on the previous scan; null when the check passed.         |
| `result`                                                         | [models.AddedResult](../models/added-result.md)                  | :heavy_check_mark:                                               | Result on the latest scan; null when the check passes now.       |