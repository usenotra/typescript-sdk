# GetPostResponse

Post fetched successfully

## Example Usage

```typescript
import { GetPostResponse } from "@usenotra/sdk/models/operations";

let value: GetPostResponse = {
  post: {
    id: "<id>",
    title: "<value>",
    content: "<value>",
    markdown: "<value>",
    contentType: "<value>",
    status: "published",
    createdAt: "1719670566745",
    updatedAt: "1735673244851",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `post`                                                             | [operations.GetPostPost](../../models/operations/get-post-post.md) | :heavy_check_mark:                                                 | N/A                                                                |