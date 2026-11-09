# ImportSiteAuthorsRequest

## Example Usage

```typescript
import { ImportSiteAuthorsRequest } from "@usenotra/sdk/models";

let value: ImportSiteAuthorsRequest = {
  authorIds: [
    "auth_8f2kq1",
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `authorIds`                                                                                                        | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Notra author IDs from GET /v1/posts/authors. Omit to import every Notra author whose slug is not in blog.json yet. | [<br/>"auth_8f2kq1"<br/>]                                                                                          |
| `replace`                                                                                                          | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Replace blog.json authors that already use an imported author's slug. Without it they are skipped.                 |                                                                                                                    |