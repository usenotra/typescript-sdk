# Item

## Example Usage

```typescript
import { Item } from "@usenotra/sdk/models/operations";

let value: Item = {
  ref: "482",
  title: "<value>",
  body: "<value>",
  author: "<value>",
  url: "https://unusual-fraudster.com",
  occurredAt: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `ref`                                                              | *string*                                                           | :heavy_check_mark:                                                 | Pull request number, commit SHA or release tag, depending on type. | 482                                                                |
| `title`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `body`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `author`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `url`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `occurredAt`                                                       | *string*                                                           | :heavy_check_mark:                                                 | Merge, commit or publish time (ISO 8601).                          |                                                                    |