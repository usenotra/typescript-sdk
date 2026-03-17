# ListPostsResponse

Posts fetched successfully

## Example Usage

```typescript
import { ListPostsResponse } from "@usenotra/sdk/models/operations";

let value: ListPostsResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  posts: [],
  pagination: {
    limit: 661824,
    currentPage: 840118,
    nextPage: 140204,
    previousPage: null,
    totalPages: 204075,
    totalItems: 315951,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `organization`                                                                         | [operations.ListPostsOrganization](../../models/operations/list-posts-organization.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `posts`                                                                                | [operations.ListPostsPost](../../models/operations/list-posts-post.md)[]               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [operations.Pagination](../../models/operations/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |