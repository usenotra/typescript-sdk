# UpdateSiteSectionsResponse

## Example Usage

```typescript
import { UpdateSiteSectionsResponse } from "@usenotra/sdk/models/operations";

let value: UpdateSiteSectionsResponse = {
  headers: {
    "key": [],
  },
  result: {
    site: {
      id: "<id>",
      name: "<value>",
    },
    sections: {},
    liveSections: {},
    hasUnpublishedChanges: true,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `result`                                                              | [models.SiteSectionsResponse](../../models/site-sections-response.md) | :heavy_check_mark:                                                    | N/A                                                                   |