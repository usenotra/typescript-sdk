# SiteDeployment

## Example Usage

```typescript
import { SiteDeployment } from "@usenotra/sdk/models";

let value: SiteDeployment = {
  id: "<id>",
  kind: "production",
  previewKey: "<value>",
  trigger: "redeploy",
  status: "skipped",
  live: true,
  liveSince: "<value>",
  branch: "<value>",
  commitSha: "<value>",
  commitMessage: "<value>",
  commitAuthor: "<value>",
  pullRequestNumber: 751630,
  url: "https://profitable-countess.biz",
  fileCount: 434336,
  totalBytes: null,
  buildDurationMs: 283647,
  errorMessage: "<value>",
  skipReason: "<value>",
  diagnostics: [
    {
      severity: "error",
      file: "<value>",
      code: "<value>",
      message: "<value>",
    },
  ],
  createdAt: "1720087487476",
  startedAt: "<value>",
  finishedAt: null,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `kind`                                                                                                              | [models.SiteDeploymentKind](../models/site-deployment-kind.md)                                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `previewKey`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `trigger`                                                                                                           | [models.Trigger](../models/trigger.md)                                                                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `status`                                                                                                            | [models.SiteDeploymentStatus](../models/site-deployment-status.md)                                                  | :heavy_check_mark:                                                                                                  | queued, building and uploading are in progress; ready, superseded, skipped, failed, canceled and expired are final. |
| `live`                                                                                                              | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `liveSince`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `branch`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `commitSha`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `commitMessage`                                                                                                     | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `commitAuthor`                                                                                                      | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `pullRequestNumber`                                                                                                 | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `fileCount`                                                                                                         | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `totalBytes`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `buildDurationMs`                                                                                                   | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `errorMessage`                                                                                                      | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `skipReason`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `diagnostics`                                                                                                       | [models.Diagnostic](../models/diagnostic.md)[]                                                                      | :heavy_check_mark:                                                                                                  | Compiler errors and warnings with file and line.                                                                    |
| `createdAt`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `startedAt`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `finishedAt`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |