# GeoAgentReadinessResponseComparison

Checks that changed between the latest completed scan and the one before it. Null until there are two completed scans.

## Example Usage

```typescript
import { GeoAgentReadinessResponseComparison } from "@usenotra/sdk/models";

let value: GeoAgentReadinessResponseComparison = {
  previousScore: 5102.15,
  previousScannedAt: "<value>",
  resolved: [
    {
      id: "<id>",
      name: "<value>",
      tier: "bonus",
      previousResult: null,
      result: "partial",
    },
  ],
  added: [
    {
      id: "<id>",
      name: "<value>",
      tier: "bonus",
      previousResult: "partial",
      result: "failed",
    },
  ],
  improved: [
    {
      id: "<id>",
      name: "<value>",
      tier: "recommended",
      previousResult: "partial",
      result: "partial",
    },
  ],
  worsened: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `previousScore`                            | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `previousScannedAt`                        | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `resolved`                                 | [models.Resolved](../models/resolved.md)[] | :heavy_check_mark:                         | N/A                                        |
| `added`                                    | [models.Added](../models/added.md)[]       | :heavy_check_mark:                         | N/A                                        |
| `improved`                                 | [models.Improved](../models/improved.md)[] | :heavy_check_mark:                         | Checks that went from failed to partial.   |
| `worsened`                                 | [models.Worsened](../models/worsened.md)[] | :heavy_check_mark:                         | Checks that went from partial to failed.   |