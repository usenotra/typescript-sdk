# GetGeoMcpToolDetailRequest

## Example Usage

```typescript
import { GetGeoMcpToolDetailRequest } from "@usenotra/sdk/models/operations";

let value: GetGeoMcpToolDetailRequest = {
  projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  toolName: "<value>",
  from: "2026-01-31",
  to: "2026-01-31",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | b1f2c3d4-0000-4000-8000-000000000000                       |
| `toolName`                                                 | *string*                                                   | :heavy_check_mark:                                         | Tool name as your MCP server registers it.                 |                                                            |
| `days`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Rolling window size in days. Ignored when from/to are set. |                                                            |
| `from`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 2026-01-31                                                 |
| `to`                                                       | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 2026-01-31                                                 |