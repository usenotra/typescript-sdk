# GetPostAuthor

## Example Usage

```typescript
import { GetPostAuthor } from "@usenotra/sdk/models/operations";

let value: GetPostAuthor = {
  id: "auth_8f2kq1",
  slug: "jane-doe",
  name: "Jane Doe",
  title: "Head of Product",
  avatarUrl: "https://cdn.example.com/avatars/jane.png",
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