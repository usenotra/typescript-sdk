# ListFeedbackRequest

## Example Usage

```typescript
import { ListFeedbackRequest } from "@usenotra/sdk/models/operations";

let value: ListFeedbackRequest = {
  status: "new",
  kind: "bug",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `status`                                                                         | [operations.ListFeedbackStatus](../../models/operations/list-feedback-status.md) | :heavy_minus_sign:                                                               | Triage status.                                                                   | new                                                                              |
| `kind`                                                                           | [operations.Kind](../../models/operations/kind.md)                               | :heavy_minus_sign:                                                               | What kind of feedback this is.                                                   | bug                                                                              |
| `projectId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Items per page                                                                   | 25                                                                               |
| `page`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | Page number                                                                      | 1                                                                                |