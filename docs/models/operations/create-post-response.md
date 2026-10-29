# CreatePostResponse

## Example Usage

```typescript
import { CreatePostResponse } from "@usenotra/sdk/models/operations";

let value: CreatePostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.CreatePostResponseBody](../../models/operations/create-post-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |