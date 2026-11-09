# SiteAuthors

## Example Usage

```typescript
import { SiteAuthors } from "@usenotra/sdk/models";

let value: SiteAuthors = {
  site: {
    id: "<id>",
    name: "<value>",
  },
  authors: [],
  authorPage: "inline",
  hasUnpublishedChanges: true,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `site`                                                                                                                              | [models.SiteAuthorsSite](../models/site-authors-site.md)                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |                                                                                                                                     |
| `authors`                                                                                                                           | [models.SiteAuthor](../models/site-author.md)[]                                                                                     | :heavy_check_mark:                                                                                                                  | Authors in blog.json order, including unpublished changes.                                                                          |                                                                                                                                     |
| `authorPage`                                                                                                                        | [models.SiteAuthorsAuthorPage](../models/site-authors-author-page.md)                                                               | :heavy_check_mark:                                                                                                                  | Layout of every author page: inline puts the avatar beside the name, stacked puts it above.                                         | inline                                                                                                                              |
| `hasUnpublishedChanges`                                                                                                             | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | blog.json has staged Design changes that are not live yet. Publish them with POST /v1/sites/{siteId}/publish or from the dashboard. | true                                                                                                                                |