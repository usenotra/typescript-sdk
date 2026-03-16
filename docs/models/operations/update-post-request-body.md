# UpdatePostRequestBody

## Example Usage

```typescript
import { UpdatePostRequestBody } from "@usenotra/sdk/models/operations";

let value: UpdatePostRequestBody = {
  title: "Ship notes for week 11",
  markdown: "# Ship notes\n\nWe shipped a faster editor.",
  status: "published",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `title`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | Ship notes for week 11                                                |
| `markdown`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | # Ship notes<br/><br/>We shipped a faster editor.                     |
| `status`                                                              | [operations.StatusRequest](../../models/operations/status-request.md) | :heavy_minus_sign:                                                    | N/A                                                                   | published                                                             |