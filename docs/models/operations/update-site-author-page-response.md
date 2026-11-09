# UpdateSiteAuthorPageResponse

## Example Usage

```typescript
import { UpdateSiteAuthorPageResponse } from "@usenotra/sdk/models/operations";

let value: UpdateSiteAuthorPageResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    site: {
      id: "<id>",
      name: "<value>",
    },
    authors: [],
    authorPage: "inline",
    hasUnpublishedChanges: true,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `headers`                                          | Record<string, *string*[]>                         | :heavy_check_mark:                                 | N/A                                                |
| `result`                                           | [models.SiteAuthors](../../models/site-authors.md) | :heavy_check_mark:                                 | N/A                                                |