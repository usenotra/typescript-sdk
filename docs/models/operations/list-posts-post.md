# ListPostsPost

## Example Usage

```typescript
import { ListPostsPost } from "@usenotra/sdk/models/operations";

let value: ListPostsPost = {
  id: "<id>",
  title: "<value>",
  content: "<value>",
  markdown: "<value>",
  contentType: "<value>",
  status: "draft",
  createdAt: "1729686244994",
  updatedAt: "1735607641695",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `title`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `content`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `markdown`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `sourceMetadata`                                                                            | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `status`                                                                                    | [operations.ListPostsStatusResponse](../../models/operations/list-posts-status-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `createdAt`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `updatedAt`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |