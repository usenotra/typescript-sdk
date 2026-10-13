# MetadataRequest

Site metadata for blog posts and changelogs. Send only the fields you want to change. Rejected with 400 for other content types.

## Example Usage

```typescript
import { MetadataRequest } from "@usenotra/sdk/models/operations";

let value: MetadataRequest = {
  coverImage: {
    url: "https://cdn.example.com/covers/ship-notes.png",
    alt: "Screenshot of the new editor",
  },
  tags: [
    "editor",
    "performance",
  ],
  excerpt: "The editor now opens twice as fast on long posts.",
  authorIds: [
    "auth_8f2kq1",
  ],
  featured: true,
  noindex: false,
  displayDate: new Date("2026-10-01"),
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `coverImage`                                                                                                                             | [operations.CoverImageRequest](../../models/operations/cover-image-request.md)                                                           | :heavy_minus_sign:                                                                                                                       | Cover image as { url, alt }. url must be an https URL (or a Notra upload path returned by the dashboard). Send null to remove the cover. | {<br/>"url": "https://cdn.example.com/covers/ship-notes.png",<br/>"alt": "Screenshot of the new editor"<br/>}                            |
| `tags`                                                                                                                                   | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Replaces all tags. Up to 12 tags; duplicates are dropped case-insensitively, keeping the first spelling. Send [] to clear.               | [<br/>"editor",<br/>"performance"<br/>]                                                                                                  |
| `excerpt`                                                                                                                                | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Custom summary for post cards and meta descriptions. Send null or an empty string to derive it from the first paragraph again.           | The editor now opens twice as fast on long posts.                                                                                        |
| `authorIds`                                                                                                                              | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Replaces the credited authors, in display order. Up to 5 IDs from GET /v1/posts/authors. Send [] to clear.                               | [<br/>"auth_8f2kq1"<br/>]                                                                                                                |
| `featured`                                                                                                                               | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Pin the post to the top of the blog index.                                                                                               | true                                                                                                                                     |
| `noindex`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Ask search engines not to index the post and leave it out of the sitemap.                                                                | false                                                                                                                                    |
| `displayDate`                                                                                                                            | [Date](../../types/rfcdate.md)                                                                                                           | :heavy_minus_sign:                                                                                                                       | Date shown on the post as YYYY-MM-DD. Send null to fall back to the publish date.                                                        | 2026-10-01                                                                                                                               |