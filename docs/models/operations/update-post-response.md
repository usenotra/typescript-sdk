# UpdatePostResponse

## Example Usage

```typescript
import { UpdatePostResponse } from "@usenotra/sdk/models/operations";

let value: UpdatePostResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.UpdatePostResponseBody](../../models/operations/update-post-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |