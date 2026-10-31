# GetPostGenerationEvent

## Example Usage

```typescript
import { GetPostGenerationEvent } from "@usenotra/sdk/models/operations";

let value: GetPostGenerationEvent = {
  id: "<id>",
  jobId: "<id>",
  type: "failed",
  message: "<value>",
  createdAt: "1716947533750",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
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