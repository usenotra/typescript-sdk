# CreatePostResponseBody

Post created successfully

## Example Usage

```typescript
import { CreatePostResponseBody } from "@usenotra/sdk/models/operations";

let value: CreatePostResponseBody = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
  post: {
    id: "<id>",
    title: "<value>",
    slug: null,
    content: "<value>",
    htmlUrl: "https://nifty-charm.name/",
    markdown: "<value>",
    rawHtml: "<value>",
    recommendations: "<value>",
    contentType: "changelog",
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
      authors: [],
      featured: false,
      noindex: false,
      hidden: false,
      displayDate: "2026-10-01",
    },
    status: "draft",
    createdAt: "1717090592504",
    updatedAt: "1735627783885",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organization`                                                                           | [operations.CreatePostOrganization](../../models/operations/create-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `post`                                                                                   | [operations.CreatePostPost](../../models/operations/create-post-post.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |