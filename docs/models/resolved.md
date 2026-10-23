# Resolved

## Example Usage

```typescript
import { Resolved } from "@usenotra/sdk/models";

let value: Resolved = {
  id: "<id>",
  name: "<value>",
  tier: "bonus",
  previousResult: null,
  result: "partial",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `tier`                                                                 | [models.ResolvedTier](../models/resolved-tier.md)                      | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousResult`                                                       | [models.ResolvedPreviousResult](../models/resolved-previous-result.md) | :heavy_check_mark:                                                     | Result on the previous scan; null when the check passed.               |
| `result`                                                               | [models.ResolvedResult](../models/resolved-result.md)                  | :heavy_check_mark:                                                     | Result on the latest scan; null when the check passes now.             |