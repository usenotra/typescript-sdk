# ListPostsPost

## Example Usage

```typescript
import { ListPostsPost } from "@usenotra/sdk/models/operations";

let value: ListPostsPost = {
  id: "<id>",
  title: "<value>",
  content: "<value>",
  markdown: "<value>",
  recommendations: "<value>",
  contentType: "<value>",
  status: "published",
  createdAt: "1705774837654",
  updatedAt: "1735685117010",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `title`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `content`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `markdown`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `recommendations`                                                                   | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `sourceMetadata`                                                                    | *any*                                                                               | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `status`                                                                            | [operations.ListPostsPostStatus](../../models/operations/list-posts-post-status.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `createdAt`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `updatedAt`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |