# CreateSitePostPreviewRequestBody

## Example Usage

```typescript
import { CreateSitePostPreviewRequestBody } from "@usenotra/sdk/models/operations";

let value: CreateSitePostPreviewRequestBody = {
  postId: "post_123",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `postId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | post_123                                                               |
| `lifetime`                                                             | [operations.Lifetime](../../models/operations/lifetime.md)             | :heavy_minus_sign:                                                     | How long the preview stays open.                                       |                                                                        |
| `password`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Lets people outside the workspace open the preview with this password. |                                                                        |