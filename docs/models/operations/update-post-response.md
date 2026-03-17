# UpdatePostResponse

Post updated successfully

## Example Usage

```typescript
import { UpdatePostResponse } from "@usenotra/sdk/models/operations";

let value: UpdatePostResponse = {
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
    createdAt: "1713328027557",
    updatedAt: "1735636377110",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organization`                                                                           | [operations.UpdatePostOrganization](../../models/operations/update-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `post`                                                                                   | [operations.UpdatePostPost](../../models/operations/update-post-post.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |