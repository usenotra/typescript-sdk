# ImportSiteAuthorsRequest

## Example Usage

```typescript
import { ImportSiteAuthorsRequest } from "@usenotra/sdk/models/operations";

let value: ImportSiteAuthorsRequest = {
  siteId: "site_8f2kq1",
  body: {
    authorIds: [
      "auth_8f2kq1",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `siteId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | site_8f2kq1                                                                    |
| `body`                                                                         | [models.ImportSiteAuthorsRequest](../../models/import-site-authors-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |