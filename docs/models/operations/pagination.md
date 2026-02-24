# Pagination

## Example Usage

```typescript
import { Pagination } from "@usenotra/sdk/models/operations";

let value: Pagination = {
  limit: 271635,
  currentPage: 56105,
  nextPage: 64883,
  previousPage: 369974,
  totalPages: 596301,
  totalItems: 220064,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `currentPage`      | *number*           | :heavy_check_mark: | N/A                |
| `nextPage`         | *number*           | :heavy_check_mark: | N/A                |
| `previousPage`     | *number*           | :heavy_check_mark: | N/A                |
| `totalPages`       | *number*           | :heavy_check_mark: | N/A                |
| `totalItems`       | *number*           | :heavy_check_mark: | N/A                |