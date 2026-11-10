# DeleteSiteAuthorResponse

## Example Usage

```typescript
import { DeleteSiteAuthorResponse } from "@usenotra/sdk/models/operations";

let value: DeleteSiteAuthorResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
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