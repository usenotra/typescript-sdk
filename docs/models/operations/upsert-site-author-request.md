# UpsertSiteAuthorRequest

## Example Usage

```typescript
import { UpsertSiteAuthorRequest } from "@usenotra/sdk/models/operations";

let value: UpsertSiteAuthorRequest = {
  siteId: "site_8f2kq1",
  authorId: "jane-doe",
  body: {
    name: "Jane Doe",
    title: "Head of Product",
    avatar: "/images/jane.png",
    x: "https://x.com/janedoe",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `siteId`                                                                                                                | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | site_8f2kq1                                                                                                             |
| `authorId`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The author's id in blog.json. Posts name the author with it and its author page lives at {blogMount}/author/{authorId}. | jane-doe                                                                                                                |
| `body`                                                                                                                  | [models.PutSiteAuthorRequest](../../models/put-site-author-request.md)                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | {<br/>"name": "Jane Doe",<br/>"title": "Head of Product",<br/>"avatar": "/images/jane.png",<br/>"x": "https://x.com/janedoe"<br/>} |