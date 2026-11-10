# PublishSiteResponse

## Example Usage

```typescript
import { PublishSiteResponse } from "@usenotra/sdk/models";

let value: PublishSiteResponse = {
  published: false,
  commitSha: "<value>",
  deploymentQueued: true,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `published`                                                                                                                      | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | False when there was nothing to publish.                                                                                         |
| `commitSha`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The commit that put the changes live.                                                                                            |
| `deploymentQueued`                                                                                                               | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | A production deployment of the commit was queued. False when it could not be queued yet; the site then deploys on its next push. |