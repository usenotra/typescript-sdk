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
    status: "published",
    createdAt: "1729551914321",
    updatedAt: "1735639595190",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organization`                                                                           | [operations.UpdatePostOrganization](../../models/operations/update-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `post`                                                                                   | [operations.UpdatePostPost](../../models/operations/update-post-post.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |