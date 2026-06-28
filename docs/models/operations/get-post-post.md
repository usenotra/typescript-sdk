# GetPostPost

## Example Usage

```typescript
import { GetPostPost } from "@usenotra/sdk/models/operations";

let value: GetPostPost = {
  id: "<id>",
  title: "<value>",
  slug: "<value>",
  content: "<value>",
  htmlUrl: null,
  markdown: "<value>",
  rawHtml: null,
  recommendations: "<value>",
  contentType: "image",
  status: "published",
  createdAt: "1722732775235",
  updatedAt: "1735658511604",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `slug`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `content`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Rendered HTML for text posts. For image posts, this is the public CDN URL of the rendered image.                       |
| `htmlUrl`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Public CDN URL of the generated HTML artifact for image posts. Null for non-image posts.                               |
| `markdown`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Markdown source for text posts. Null for image posts.                                                                  |
| `rawHtml`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Legacy inline generated HTML for image posts. New generated image HTML is stored as htmlUrl. Null for non-image posts. |
| `recommendations`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `contentType`                                                                                                          | [operations.GetPostContentType](../../models/operations/get-post-content-type.md)                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceMetadata`                                                                                                       | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.GetPostStatus](../../models/operations/get-post-status.md)                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |