# CreatePostRequest

Slugs are normalized to lowercase letters, numbers, and hyphens and only accepted for blog posts and changelogs. Omit markdown to create an empty post you fill in later.

## Example Usage

```typescript
import { CreatePostRequest } from "@usenotra/sdk/models/operations";

let value: CreatePostRequest = {
  title: "Ship notes for week 11",
  contentType: "blog_post",
  slug: "ship-notes-week-11",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `title`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `contentType`                                                                                          | [operations.CreatePostContentTypeRequest](../../models/operations/create-post-content-type-request.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `slug`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `markdown`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.CreatePostStatusRequest](../../models/operations/create-post-status-request.md)            | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |