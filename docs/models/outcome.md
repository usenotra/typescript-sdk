# Outcome

## Example Usage

```typescript
import { Outcome } from "@usenotra/sdk/models";

let value: Outcome = {
  source: "<value>",
  sessions: 17170,
  pagesPerSession: 3666.14,
  engagedRate: 1128.37,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `source`                                                           | *string*                                                           | :heavy_check_mark:                                                 | AI assistant the session came from; empty for every other session. |
| `sessions`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `pagesPerSession`                                                  | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `engagedRate`                                                      | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |