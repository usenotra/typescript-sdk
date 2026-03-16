# UpdatePostResponse

Post updated successfully

## Example Usage

```typescript
import { UpdatePostResponse } from "@usenotra/sdk/models/operations";

let value: UpdatePostResponse = {
  post: {
    id: "<id>",
    title: "<value>",
    content: "<value>",
    markdown: "<value>",
    recommendations: "<value>",
    contentType: "<value>",
    status: "draft",
    createdAt: "1721309192654",
    updatedAt: "1735628335128",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `post`                                                                   | [operations.UpdatePostPost](../../models/operations/update-post-post.md) | :heavy_check_mark:                                                       | N/A                                                                      |