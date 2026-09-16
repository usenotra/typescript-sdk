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
    status: "published",
    createdAt: "1707230215451",
    updatedAt: "1735638643406",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organization`                                                                           | [operations.CreatePostOrganization](../../models/operations/create-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `post`                                                                                   | [operations.CreatePostPost](../../models/operations/create-post-post.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |