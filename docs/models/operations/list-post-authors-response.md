# ListPostAuthorsResponse

Authors fetched successfully

## Example Usage

```typescript
import { ListPostAuthorsResponse } from "@usenotra/sdk/models/operations";

let value: ListPostAuthorsResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  authors: [
    {
      id: "auth_8f2kq1",
      slug: "jane-doe",
      name: "Jane Doe",
      title: "Head of Product",
      bio: "<value>",
      avatarUrl: "https://fat-battle.net/",
      url: "https://another-marten.net/",
      x: "<value>",
      linkedin: "<value>",
      github: null,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `organization`                                                                                      | [operations.ListPostAuthorsOrganization](../../models/operations/list-post-authors-organization.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `authors`                                                                                           | [operations.ListPostAuthorsAuthor](../../models/operations/list-post-authors-author.md)[]           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |