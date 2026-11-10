# ImportSiteAuthorsResponse

## Example Usage

```typescript
import { ImportSiteAuthorsResponse } from "@usenotra/sdk/models";

let value: ImportSiteAuthorsResponse = {
  site: {
    id: "<id>",
    name: "<value>",
  },
  authors: [],
  authorPage: "inline",
  hasUnpublishedChanges: true,
  imported: [
    "jane-doe",
  ],
  avatarsSkipped: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `site`                                                                                                                                 | [models.ImportSiteAuthorsResponseSite](../models/import-site-authors-response-site.md)                                                 | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `authors`                                                                                                                              | [models.SiteAuthor](../models/site-author.md)[]                                                                                        | :heavy_check_mark:                                                                                                                     | Authors in blog.json order, including unpublished changes.                                                                             |                                                                                                                                        |
| `authorPage`                                                                                                                           | [models.ImportSiteAuthorsResponseAuthorPage](../models/import-site-authors-response-author-page.md)                                    | :heavy_check_mark:                                                                                                                     | Layout of every author page: inline puts the avatar beside the name, stacked puts it above.                                            | inline                                                                                                                                 |
| `hasUnpublishedChanges`                                                                                                                | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | blog.json has staged Design changes that are not live yet. Publish them with POST /v1/sites/{siteId}/publish or from the dashboard.    | true                                                                                                                                   |
| `imported`                                                                                                                             | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | Ids written to blog.json.                                                                                                              | [<br/>"jane-doe"<br/>]                                                                                                                 |
| `avatarsSkipped`                                                                                                                       | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | Ids whose avatar was a dashboard upload, which only the dashboard import can copy into the site. Set their avatar with PUT afterwards. |                                                                                                                                        |