# ListPostAuthorsAuthor

## Example Usage

```typescript
import { ListPostAuthorsAuthor } from "@usenotra/sdk/models/operations";

let value: ListPostAuthorsAuthor = {
  id: "auth_8f2kq1",
  slug: "jane-doe",
  name: "Jane Doe",
  title: "Head of Product",
  bio: "<value>",
  avatarUrl: "https://accurate-backburn.info/",
  url: "https://janedoe.dev",
  x: "https://x.com/janedoe",
  linkedin: "<value>",
  github: "<value>",
  youtube: "<value>",
  bluesky: "<value>",
  mastodon: "<value>",
  threads: "<value>",
  instagram: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Pass this ID in metadata.authorIds when updating a post. | auth_8f2kq1                                              |
| `slug`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | jane-doe                                                 |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | Jane Doe                                                 |
| `title`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | Head of Product                                          |
| `bio`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `avatarUrl`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `url`                                                    | *string*                                                 | :heavy_check_mark:                                       | Author's website.                                        | https://janedoe.dev                                      |
| `x`                                                      | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | https://x.com/janedoe                                    |
| `linkedin`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `github`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `youtube`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `bluesky`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `mastodon`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `threads`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `instagram`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |