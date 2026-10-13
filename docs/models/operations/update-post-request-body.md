# UpdatePostRequestBody

## Example Usage

```typescript
import { UpdatePostRequestBody } from "@usenotra/sdk/models/operations";

let value: UpdatePostRequestBody = {
  title: "Ship notes for week 11",
  slug: "ship-notes-week-11",
  markdown: "# Ship notes\n\nWe shipped a faster editor.",
  status: "published",
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
    authorIds: [
      "auth_8f2kq1",
    ],
    featured: true,
    noindex: false,
    displayDate: new Date("2026-10-01"),
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | Ship notes for week 11                                                                                                           |
| `slug`                                                                                                                           | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | ship-notes-week-11                                                                                                               |
| `markdown`                                                                                                                       | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | # Ship notes<br/><br/>We shipped a faster editor.                                                                                |
| `status`                                                                                                                         | [operations.UpdatePostStatusRequest](../../models/operations/update-post-status-request.md)                                      | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | published                                                                                                                        |
| `metadata`                                                                                                                       | [operations.MetadataRequest](../../models/operations/metadata-request.md)                                                        | :heavy_minus_sign:                                                                                                               | Site metadata for blog posts and changelogs. Send only the fields you want to change. Rejected with 400 for other content types. |                                                                                                                                  |