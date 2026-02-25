# GetPostRequest

## Example Usage

```typescript
import { GetPostRequest } from "@usenotra/sdk/models/operations";

let value: GetPostRequest = {
  organizationId: "org_123",
  postId: "post_123",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `organizationId`                                                        | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | org_123                                                                 |
| `postId`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | post_123                                                                |
| `status`                                                                | *operations.GetPostStatusUnion*                                         | :heavy_minus_sign:                                                      | Filter by status. Repeat the query param to pass multiple values.       |                                                                         |
| `contentType`                                                           | *operations.GetPostContentTypeUnion*                                    | :heavy_minus_sign:                                                      | Filter by content type. Repeat the query param to pass multiple values. |                                                                         |