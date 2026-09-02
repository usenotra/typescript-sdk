# GetGeoVisibilityCompetitorShareRequest

## Example Usage

```typescript
import { GetGeoVisibilityCompetitorShareRequest } from "@usenotra/sdk/models/operations";

let value: GetGeoVisibilityCompetitorShareRequest = {
  projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  from: "2026-01-31",
  to: "2026-01-31",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | b1f2c3d4-0000-4000-8000-000000000000                       |
| `days`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Rolling window size in days. Ignored when from/to are set. |                                                            |
| `from`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 2026-01-31                                                 |
| `to`                                                       | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 2026-01-31                                                 |