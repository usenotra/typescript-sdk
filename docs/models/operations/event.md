# Event

## Example Usage

```typescript
import { Event } from "@usenotra/sdk/models/operations";

let value: Event = {
  id: "<id>",
  jobId: "<id>",
  type: "queued",
  message: "<value>",
  createdAt: "1722417529878",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `jobId`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_check_mark:                                 | N/A                                                |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `metadata`                                         | Record<string, *any*>                              | :heavy_check_mark:                                 | N/A                                                |