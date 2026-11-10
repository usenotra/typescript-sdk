# UpdateSiteSectionsRequest

## Example Usage

```typescript
import { UpdateSiteSectionsRequest } from "@usenotra/sdk/models/operations";

let value: UpdateSiteSectionsRequest = {
  siteId: "site_8f2kq1",
  body: {
    blog: "/blog",
    changelog: "/changelog",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `siteId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | site_8f2kq1                                                                    |
| `body`                                                                         | [models.PatchSiteSectionsRequest](../../models/patch-site-sections-request.md) | :heavy_check_mark:                                                             | N/A                                                                            | {<br/>"blog": "/blog",<br/>"changelog": "/changelog"<br/>}                     |