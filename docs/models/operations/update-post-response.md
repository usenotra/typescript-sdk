# UpdatePostResponse

## Example Usage

```typescript
import { UpdatePostResponse } from "@usenotra/sdk/models/operations";

let value: UpdatePostResponse = {
  headers: {},
  result: {
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
    },
    post: {
      id: "<id>",
      title: "<value>",
      slug: "<value>",
      content: "<value>",
      markdown: "<value>",
      recommendations: "<value>",
      contentType: "<value>",
      status: "published",
      createdAt: "1711662898932",
      updatedAt: "1735636079865",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.UpdatePostResponseBody](../../models/operations/update-post-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |