# GetPostPost

## Example Usage

```typescript
import { GetPostPost } from "@usenotra/sdk/models/operations";

let value: GetPostPost = {
  id: "<id>",
  title: "<value>",
  content: "<value>",
  markdown: "<value>",
  contentType: "<value>",
  status: "published",
  createdAt: "1704263512857",
  updatedAt: "1735613684057",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `title`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `content`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `markdown`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `sourceMetadata`                                                                | *any*                                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `status`                                                                        | [operations.GetPostPostStatus](../../models/operations/get-post-post-status.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `createdAt`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `updatedAt`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |