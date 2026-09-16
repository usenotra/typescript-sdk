# CreatePostResponse

## Example Usage

```typescript
import { CreatePostResponse } from "@usenotra/sdk/models/operations";

let value: CreatePostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: null,
    },
    post: {
      id: "<id>",
      title: "<value>",
      slug: null,
      content: "<value>",
      htmlUrl: "https://nifty-charm.name/",
      markdown: "<value>",
      rawHtml: "<value>",
      recommendations: "<value>",
      contentType: "changelog",
      status: "published",
      createdAt: "1707230215451",
      updatedAt: "1735638643406",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.CreatePostResponseBody](../../models/operations/create-post-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |