# ListPostsResponse

Posts fetched successfully

## Example Usage

```typescript
import { ListPostsResponse } from "@usenotra/sdk/models/operations";

let value: ListPostsResponse = {
  posts: [
    {
      id: "<id>",
      title: "<value>",
      content: "<value>",
      markdown: "<value>",
      contentType: "<value>",
      status: "draft",
      createdAt: "1725024864129",
      updatedAt: "1735675785364",
    },
  ],
  pagination: {
    limit: 812498,
    currentPage: 140204,
    nextPage: null,
    previousPage: 315951,
    totalPages: 323907,
    totalItems: 113078,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `posts`                                                                  | [operations.ListPostsPost](../../models/operations/list-posts-post.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [operations.Pagination](../../models/operations/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |