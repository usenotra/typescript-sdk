# UpdateSiteAuthorPageRequest

## Example Usage

```typescript
import { UpdateSiteAuthorPageRequest } from "@usenotra/sdk/models/operations";

let value: UpdateSiteAuthorPageRequest = {
  siteId: "site_8f2kq1",
  body: {
    layout: "stacked",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `siteId`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 | site_8f2kq1                                                                         |
| `body`                                                                              | [models.PatchSiteAuthorPageRequest](../../models/patch-site-author-page-request.md) | :heavy_check_mark:                                                                  | N/A                                                                                 | {<br/>"layout": "stacked"<br/>}                                                     |