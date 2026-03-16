# UpdatePostRequest

## Example Usage

```typescript
import { UpdatePostRequest } from "@usenotra/sdk/models/operations";

let value: UpdatePostRequest = {
  postId: "post_123",
  body: {
    title: "Ship notes for week 11",
    markdown: "# Ship notes\n\nWe shipped a faster editor.",
    status: "published",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `postId`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | post_123                                                                                |
| `body`                                                                                  | [operations.UpdatePostRequestBody](../../models/operations/update-post-request-body.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |