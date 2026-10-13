# GetPostMetadata

Cover image, tags, excerpt, authors and other site metadata. Set for blog posts and changelogs, null for every other content type.

## Example Usage

```typescript
import { GetPostMetadata } from "@usenotra/sdk/models/operations";

let value: GetPostMetadata = {
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
  displayDate: "2026-10-01",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `coverImage`                                                                                             | [operations.GetPostCoverImage](../../models/operations/get-post-cover-image.md)                          | :heavy_check_mark:                                                                                       | Cover image shown on post cards and social previews.                                                     |                                                                                                          |
| `tags`                                                                                                   | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      | [<br/>"editor",<br/>"performance"<br/>]                                                                  |
| `excerpt`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Summary shown on post cards and in meta descriptions. Null means it is derived from the first paragraph. | The editor now opens twice as fast on long posts.                                                        |
| `authors`                                                                                                | [operations.GetPostAuthor](../../models/operations/get-post-author.md)[]                                 | :heavy_check_mark:                                                                                       | Credited authors in display order. Authors deleted since they were assigned are omitted.                 |                                                                                                          |
| `featured`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Pinned to the top of the blog index on hosted sites.                                                     | false                                                                                                    |
| `noindex`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Asks search engines not to index the post and leaves it out of the sitemap.                              | false                                                                                                    |
| `displayDate`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Date shown on the post as YYYY-MM-DD. Null means the publish date is used.                               | 2026-10-01                                                                                               |