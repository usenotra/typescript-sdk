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
      recommendations: "<value>",
      contentType: "<value>",
      status: "published",
      createdAt: "1730647563531",
      updatedAt: "1735673399029",
    },
  ],
  pagination: {
    limit: 140204,
    currentPage: 47158,
    nextPage: 315951,
    previousPage: 113078,
    totalPages: 957433,
    totalItems: 458950,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `posts`                                                                  | [operations.ListPostsPost](../../models/operations/list-posts-post.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [operations.Pagination](../../models/operations/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |