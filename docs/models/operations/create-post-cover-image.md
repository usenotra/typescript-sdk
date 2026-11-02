# CreatePostCoverImage

Cover image shown on post cards and social previews.

## Example Usage

```typescript
import { CreatePostCoverImage } from "@usenotra/sdk/models/operations";

let value: CreatePostCoverImage = {
  url: "https://cdn.example.com/covers/ship-notes.png",
  alt: "Screenshot of the new editor",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | Absolute https URL, or a path to an image uploaded in Notra (starting with /api/uploads/). | https://cdn.example.com/covers/ship-notes.png                                              |
| `alt`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | Alt text. Empty string when none is set.                                                   | Screenshot of the new editor                                                               |