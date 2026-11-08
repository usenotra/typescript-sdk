# GetPostAgentReachRequest

## Example Usage

```typescript
import { GetPostAgentReachRequest } from "@usenotra/sdk/models/operations";

let value: GetPostAgentReachRequest = {
  postId: "post_123",
  from: "2026-01-31",
  to: "2026-01-31",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `postId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | post_123                                                   |
| `days`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Rolling window size in days. Ignored when from/to are set. |                                                            |
| `from`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 2026-01-31                                                 |
| `to`                                                       | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 2026-01-31                                                 |