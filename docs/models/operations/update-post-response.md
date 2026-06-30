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
      htmlUrl: "https://every-gloom.info",
      markdown: "<value>",
      rawHtml: "<value>",
      recommendations: "<value>",
      contentType: "changelog",
      status: "published",
      createdAt: "1729551914321",
      updatedAt: "1735639595190",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.UpdatePostResponseBody](../../models/operations/update-post-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |