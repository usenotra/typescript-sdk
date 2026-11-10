# SitePreview

## Example Usage

```typescript
import { SitePreview } from "@usenotra/sdk/models";

let value: SitePreview = {
  previewKey: "<value>",
  deploymentId: "<id>",
  visibility: "public",
  url: "https://frizzy-cd.net",
  branch: "<value>",
  pullRequestNumber: 610113,
  commitSha: null,
  activatedAt: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `previewKey`                                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `deploymentId`                               | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `visibility`                                 | [models.Visibility](../models/visibility.md) | :heavy_check_mark:                           | N/A                                          |
| `url`                                        | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `branch`                                     | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `pullRequestNumber`                          | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `commitSha`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `activatedAt`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |