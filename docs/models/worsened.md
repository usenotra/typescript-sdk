# Worsened

## Example Usage

```typescript
import { Worsened } from "@usenotra/sdk/models";

let value: Worsened = {
  id: "<id>",
  name: "<value>",
  tier: "bonus",
  previousResult: "partial",
  result: "failed",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `tier`                                                                 | [models.WorsenedTier](../models/worsened-tier.md)                      | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousResult`                                                       | [models.WorsenedPreviousResult](../models/worsened-previous-result.md) | :heavy_check_mark:                                                     | Result on the previous scan; null when the check passed.               |
| `result`                                                               | [models.WorsenedResult](../models/worsened-result.md)                  | :heavy_check_mark:                                                     | Result on the latest scan; null when the check passes now.             |