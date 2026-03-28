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
    slug: "<value>",
    content: "<value>",
    markdown: "<value>",
    recommendations: "<value>",
    contentType: "<value>",
    status: "draft",
    createdAt: "1716263384859",
    updatedAt: "1735678933296",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organization`                                                                           | [operations.UpdatePostOrganization](../../models/operations/update-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `post`                                                                                   | [operations.UpdatePostPost](../../models/operations/update-post-post.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |