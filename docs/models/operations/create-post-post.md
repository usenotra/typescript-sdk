# CreatePostPost

## Example Usage

```typescript
import { CreatePostPost } from "@usenotra/sdk/models/operations";

let value: CreatePostPost = {
  id: "<id>",
  title: "<value>",
  slug: "<value>",
  content: "<value>",
  htmlUrl: "https://firm-sock.biz/",
  markdown: "<value>",
  rawHtml: "<value>",
  recommendations: "<value>",
  contentType: "twitter_post",
  status: "draft",
  createdAt: "1713106176562",
  updatedAt: "1735630614545",
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
| `contentType`                                                                                                          | [operations.CreatePostPostContentType](../../models/operations/create-post-post-content-type.md)                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceMetadata`                                                                                                       | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.CreatePostPostStatus](../../models/operations/create-post-post-status.md)                                  | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |