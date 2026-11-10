# DeleteSiteAuthorRequest

## Example Usage

```typescript
import { DeleteSiteAuthorRequest } from "@usenotra/sdk/models/operations";

let value: DeleteSiteAuthorRequest = {
  siteId: "site_8f2kq1",
  authorId: "jane-doe",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `siteId`                                                                                                                | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | site_8f2kq1                                                                                                             |
| `authorId`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The author's id in blog.json. Posts name the author with it and its author page lives at {blogMount}/author/{authorId}. | jane-doe                                                                                                                |
| `force`                                                                                                                 | [operations.Force](../../models/operations/force.md)                                                                    | :heavy_minus_sign:                                                                                                      | Set to true to delete an author that is live or credited on Notra posts.                                                |                                                                                                                         |