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
    recommendations: "<value>",
    contentType: "<value>",
    status: "draft",
    createdAt: "1729720265781",
    updatedAt: "1735666808271",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `post`                                                             | [operations.GetPostPost](../../models/operations/get-post-post.md) | :heavy_check_mark:                                                 | N/A                                                                |