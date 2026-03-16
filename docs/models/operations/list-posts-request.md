# ListPostsRequest

## Example Usage

```typescript
import { ListPostsRequest } from "@usenotra/sdk/models/operations";

let value: ListPostsRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `sort`                                                                  | [operations.Sort](../../models/operations/sort.md)                      | :heavy_minus_sign:                                                      | Sort by creation date                                                   | desc                                                                    |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Items per page                                                          | 10                                                                      |
| `page`                                                                  | *number*                                                                | :heavy_minus_sign:                                                      | Page number                                                             | 1                                                                       |
| `status`                                                                | *operations.Status*                                                     | :heavy_minus_sign:                                                      | Filter by status. Repeat the query param to pass multiple values.       |                                                                         |
| `contentType`                                                           | *operations.ContentType*                                                | :heavy_minus_sign:                                                      | Filter by content type. Repeat the query param to pass multiple values. |                                                                         |