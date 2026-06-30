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
    status: "published",
    createdAt: "1726654645385",
    updatedAt: "1735636543842",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `organization`                                                                     | [operations.GetPostOrganization](../../models/operations/get-post-organization.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `post`                                                                             | [operations.GetPostPost](../../models/operations/get-post-post.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |