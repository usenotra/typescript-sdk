# ListPostsAuthor

## Example Usage

```typescript
import { ListPostsAuthor } from "@usenotra/sdk/models/operations";

let value: ListPostsAuthor = {
  id: "auth_8f2kq1",
  slug: "jane-doe",
  name: "Jane Doe",
  title: "Head of Product",
  avatarUrl: "https://cdn.example.com/avatars/jane.png",
  url: "https://janedoe.dev",
  x: "https://x.com/janedoe",
  linkedin: "<value>",
  github: "<value>",
  youtube: null,
  bluesky: null,
  mastodon: null,
  threads: "<value>",
  instagram: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | auth_8f2kq1                                                                   |
| `slug`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | Stable author handle; hosted sites list the author's posts at /author/{slug}. | jane-doe                                                                      |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | Jane Doe                                                                      |
| `title`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | Head of Product                                                               |
| `avatarUrl`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | https://cdn.example.com/avatars/jane.png                                      |
| `url`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | Author's website.                                                             | https://janedoe.dev                                                           |
| `x`                                                                           | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | https://x.com/janedoe                                                         |
| `linkedin`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `github`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `youtube`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `bluesky`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `mastodon`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `threads`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `instagram`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |