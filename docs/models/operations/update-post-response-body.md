# UpdatePostResponseBody

Post updated successfully

## Example Usage

```typescript
import { UpdatePostResponseBody } from "@usenotra/sdk/models/operations";

let value: UpdatePostResponseBody = {
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
    htmlUrl: "https://every-gloom.info",
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
    status: "published",
    createdAt: "1717437997837",
    updatedAt: "1735637308333",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organization`                                                                           | [operations.UpdatePostOrganization](../../models/operations/update-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `post`                                                                                   | [operations.UpdatePostPost](../../models/operations/update-post-post.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |