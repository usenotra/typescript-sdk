# SitePostPreview

## Example Usage

```typescript
import { SitePostPreview } from "@usenotra/sdk/models";

let value: SitePostPreview = {
  status: "<value>",
  live: true,
  deleting: true,
  errorMessage: "<value>",
  expiresAt: "1740032309398",
  hasPassword: true,
  url: "https://medium-cheetah.org/",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `status`                              | *string*                              | :heavy_check_mark:                    | Status of the preview's latest build. |
| `live`                                | *boolean*                             | :heavy_check_mark:                    | N/A                                   |
| `deleting`                            | *boolean*                             | :heavy_check_mark:                    | N/A                                   |
| `errorMessage`                        | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `expiresAt`                           | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `hasPassword`                         | *boolean*                             | :heavy_check_mark:                    | N/A                                   |
| `url`                                 | *string*                              | :heavy_check_mark:                    | N/A                                   |