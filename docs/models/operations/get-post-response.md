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
    content: "<value>",
    markdown: "<value>",
    recommendations: "<value>",
    contentType: "<value>",
    status: "published",
    createdAt: "1727370886848",
    updatedAt: "1735674997411",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `organization`                                                                     | [operations.GetPostOrganization](../../models/operations/get-post-organization.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `post`                                                                             | [operations.GetPostPost](../../models/operations/get-post-post.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |