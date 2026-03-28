# UpdatePostPost

## Example Usage

```typescript
import { UpdatePostPost } from "@usenotra/sdk/models/operations";

let value: UpdatePostPost = {
  id: "<id>",
  title: "<value>",
  slug: "<value>",
  content: "<value>",
  markdown: "<value>",
  recommendations: "<value>",
  contentType: "<value>",
  status: "draft",
  createdAt: "1724456702558",
  updatedAt: "1735626603283",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `title`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `slug`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `content`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `markdown`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `recommendations`                                                                     | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `sourceMetadata`                                                                      | *any*                                                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `status`                                                                              | [operations.UpdatePostPostStatus](../../models/operations/update-post-post-status.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `createdAt`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `updatedAt`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |