# ListPostsPost

## Example Usage

```typescript
import { ListPostsPost } from "@usenotra/sdk/models/operations";

let value: ListPostsPost = {
  id: "<id>",
  title: "<value>",
  slug: "<value>",
  content: "<value>",
  htmlUrl: "https://weekly-premeditation.name/",
  markdown: "<value>",
  rawHtml: "<value>",
  recommendations: "<value>",
  contentType: "blog_post",
  metadata: {
    coverImage: {
      url: "https://cdn.example.com/covers/ship-notes.png",
      alt: "Screenshot of the new editor",
    },
    tags: [
      "editor",
      "performance",
    ],
    excerpt: "The editor now opens twice as fast on long posts.",
    authors: [
      {
        id: "auth_8f2kq1",
        slug: "jane-doe",
        name: "Jane Doe",
        title: "Head of Product",
        avatarUrl: "https://cdn.example.com/avatars/jane.png",
      },
    ],
    featured: false,
    noindex: false,
    hidden: false,
    displayDate: "2026-10-01",
  },
  status: "published",
  createdAt: "1733473996471",
  updatedAt: "1735605138245",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `title`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `slug`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `content`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Rendered HTML for text posts. For image posts, this is the public CDN URL of the rendered image.                                   |
| `htmlUrl`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Public CDN URL of the generated HTML artifact for image posts. Null for non-image posts.                                           |
| `markdown`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Markdown source for text posts. Null for image posts.                                                                              |
| `rawHtml`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Legacy inline generated HTML for image posts. New generated image HTML is stored as htmlUrl. Null for non-image posts.             |
| `recommendations`                                                                                                                  | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `contentType`                                                                                                                      | [operations.ListPostsContentType](../../models/operations/list-posts-content-type.md)                                              | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `sourceMetadata`                                                                                                                   | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `metadata`                                                                                                                         | [operations.ListPostsMetadata](../../models/operations/list-posts-metadata.md)                                                     | :heavy_check_mark:                                                                                                                 | Cover image, tags, excerpt, authors and other site metadata. Set for blog posts and changelogs, null for every other content type. |
| `status`                                                                                                                           | [operations.ListPostsStatus](../../models/operations/list-posts-status.md)                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |