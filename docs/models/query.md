# Query

## Example Usage

```typescript
import { Query } from "@usenotra/sdk/models";

let value: Query = {
  query: "<value>",
  clicks: 8289.2,
  impressions: 8692.57,
  position: 1461.26,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `query`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `clicks`                                     | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `impressions`                                | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `position`                                   | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `page`                                       | *string*                                     | :heavy_minus_sign:                           | Page Google showed most for this query.      |
| `pagePosition`                               | *number*                                     | :heavy_minus_sign:                           | Google position of that page for this query. |
| `pageImpressions`                            | *number*                                     | :heavy_minus_sign:                           | Impressions of that page for this query.     |