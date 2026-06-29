# UpdatePostPost

## Example Usage

```typescript
import { UpdatePostPost } from "@usenotra/sdk/models/operations";

let value: UpdatePostPost = {
  id: "<id>",
  title: "<value>",
  slug: "<value>",
  content: "<value>",
  htmlUrl: "https://proud-dream.net/",
  markdown: "<value>",
  rawHtml: "<value>",
  recommendations: null,
  contentType: "blog_post",
  status: "published",
  createdAt: "1734132650681",
  updatedAt: "1735618820128",
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
| `contentType`                                                                                                          | [operations.UpdatePostContentType](../../models/operations/update-post-content-type.md)                                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceMetadata`                                                                                                       | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.UpdatePostPostStatus](../../models/operations/update-post-post-status.md)                                  | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |