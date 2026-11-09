# SitePostPreviewResponse

## Example Usage

```typescript
import { SitePostPreviewResponse } from "@usenotra/sdk/models";

let value: SitePostPreviewResponse = {
  preview: {
    status: "<value>",
    live: true,
    deleting: true,
    errorMessage: "<value>",
    expiresAt: "1766494125497",
    hasPassword: true,
    url: "https://mundane-peninsula.com/",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `preview`                                                                                          | [models.SitePostPreview](../models/site-post-preview.md)                                           | :heavy_check_mark:                                                                                 | Null when the post has no preview on this Site.                                                    |
| `organization`                                                                                     | [models.SitePostPreviewResponseOrganization](../models/site-post-preview-response-organization.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |