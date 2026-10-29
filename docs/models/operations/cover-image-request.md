# CoverImageRequest

Cover image as { url, alt }. url must be an https URL (or a Notra upload path returned by the dashboard). Send null to remove the cover.

## Example Usage

```typescript
import { CoverImageRequest } from "@usenotra/sdk/models/operations";

let value: CoverImageRequest = {
  url: "https://cdn.example.com/covers/ship-notes.png",
  alt: "Screenshot of the new editor",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `url`              | *string*           | :heavy_check_mark: | N/A                |
| `alt`              | *string*           | :heavy_minus_sign: | N/A                |