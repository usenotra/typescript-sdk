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
      url: "https://janedoe.dev",
      x: "https://x.com/janedoe",
      linkedin: "<value>",
      github: "<value>",
      youtube: null,
      bluesky: "<value>",
      mastodon: "<value>",
      threads: "<value>",
      instagram: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `organization`                                                                                      | [operations.ListPostAuthorsOrganization](../../models/operations/list-post-authors-organization.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `authors`                                                                                           | [operations.ListPostAuthorsAuthor](../../models/operations/list-post-authors-author.md)[]           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |