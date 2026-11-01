# UpdatePostRequest

## Example Usage

```typescript
import { UpdatePostRequest } from "@usenotra/sdk/models/operations";

let value: UpdatePostRequest = {
  postId: "post_123",
  body: {
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
      hidden: true,
      displayDate: new Date("2026-10-01"),
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `postId`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | post_123                                                                                |
| `body`                                                                                  | [operations.UpdatePostRequestBody](../../models/operations/update-post-request-body.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |