# GetPostPost

## Example Usage

```typescript
import { GetPostPost } from "@usenotra/sdk/models/operations";

let value: GetPostPost = {
  id: "<id>",
  title: "<value>",
  slug: "<value>",
  content: "<value>",
  markdown: "<value>",
  recommendations: null,
  contentType: "<value>",
  status: "draft",
  createdAt: "1706574246647",
  updatedAt: "1735632971958",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `title`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `slug`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `content`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `markdown`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `recommendations`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `sourceMetadata`                                                       | *any*                                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `status`                                                               | [operations.GetPostStatus](../../models/operations/get-post-status.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdAt`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updatedAt`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |