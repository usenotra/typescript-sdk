# GetPostResponse

Post fetched successfully

## Example Usage

```typescript
import { GetPostResponse } from "@usenotra/sdk/models/operations";

let value: GetPostResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  post: {
    id: "<id>",
    title: "<value>",
    slug: "<value>",
    content: "<value>",
    htmlUrl: "https://sweet-lady.net",
    markdown: "<value>",
    rawHtml: null,
    recommendations: "<value>",
    contentType: "twitter_post",
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
    createdAt: "1716324242975",
    updatedAt: "1735666818366",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `organization`                                                                     | [operations.GetPostOrganization](../../models/operations/get-post-organization.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `post`                                                                             | [operations.GetPostPost](../../models/operations/get-post-post.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |