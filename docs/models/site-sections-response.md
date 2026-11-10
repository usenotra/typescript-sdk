# SiteSectionsResponse

## Example Usage

```typescript
import { SiteSectionsResponse } from "@usenotra/sdk/models";

let value: SiteSectionsResponse = {
  site: {
    id: "<id>",
    name: "<value>",
  },
  sections: {},
  liveSections: {},
  hasUnpublishedChanges: true,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `site`                                                                                                                                             | [models.SiteSectionsResponseSite](../models/site-sections-response-site.md)                                                                        | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `sections`                                                                                                                                         | [models.Sections](../models/sections.md)                                                                                                           | :heavy_check_mark:                                                                                                                                 | The sections blog.json sets with unpublished changes applied. They take over from the dashboard setting once a production build of them goes live. |
| `liveSections`                                                                                                                                     | [models.LiveSections](../models/live-sections.md)                                                                                                  | :heavy_check_mark:                                                                                                                                 | The paths the live site serves now.                                                                                                                |
| `hasUnpublishedChanges`                                                                                                                            | *boolean*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |